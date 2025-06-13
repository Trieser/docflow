<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Document;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    public function index()
    {
        return Document::with('approvalUser')->latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'document_type' => 'required|string|in:BRD,Proposal,UAT',
            'background' => 'required|string',
            'objective' => 'required|string',
            'benefit' => 'required|string',
            'detail' => 'required|string',
            'strategy_schedule' => 'required|string',
            'approval_user_id' => 'required|exists:users,id',
        ]);

        $document = Document::create($data);

        // Generate DOCX
        $phpWord = new PhpWord();
        $section = $phpWord->addSection();
        $section->addTitle($data['title'], 1);
        $section->addText("Tipe Dokumen: {$data['document_type']}");
        $section->addText("Latar Belakang:\n{$data['background']}");
        $section->addText("Tujuan Pengembangan:\n{$data['objective']}");
        $section->addText("Manfaat:\n{$data['benefit']}");
        $section->addText("Rincian Pengembangan:\n{$data['detail']}");
        $section->addText("Strategi & Jadwal:\n{$data['strategy_schedule']}");

        $filename = 'document_' . $document->id . '.docx';
        $filePath = "public/documents/{$filename}";
        Storage::makeDirectory('public/documents');

        $writer = IOFactory::createWriter($phpWord, 'Word2007');
        $writer->save(storage_path("app/" . $filePath));

        return response()->json([
            'message' => 'Document created',
            'data' => $document,
            'docx_url' => Storage::url("documents/{$filename}")
        ], 201);
    }
}
