<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Document;
use App\Models\User;

class DocumentSeeder extends Seeder
{
    public function run()
    {
        $approvalUser = User::where('role', 'admin')->first(); 

        $data = [
            [
                'title' => 'Proposal Pengembangan App A',
                'document_type' => 'Proposal',
                'background' => 'Kebutuhan user terhadap sistem yang cepat meningkat...',
                'objective' => 'Meningkatkan efisiensi tim internal',
                'benefit' => 'Penghematan biaya operasional',
                'detail' => 'Butuh API, UI, testing, dan dokumentasi',
                'strategy_schedule' => '3 bulan mulai dari Juli 2025',
                'approval_user_id' => $approvalUser->id,
            ],
            [
                'title' => 'BRD System Inventory',
                'document_type' => 'BRD',
                'background' => 'Banyak kesalahan input stok barang',
                'objective' => 'Otomatisasi dan akurasi pencatatan stok',
                'benefit' => 'Mengurangi kerugian stok hilang',
                'detail' => 'Modul input, validasi barcode, dan report',
                'strategy_schedule' => '2 bulan mulai Agustus 2025',
                'approval_user_id' => $approvalUser->id,
            ],
            [
                'title' => 'UAT Platform Pembayaran',
                'document_type' => 'UAT',
                'background' => 'User sering komplain gagal pembayaran',
                'objective' => 'Pastikan seluruh skenario UAT berjalan',
                'benefit' => 'Tingkat kepercayaan pelanggan meningkat',
                'detail' => 'Test case pembayaran OVO, Gopay, transfer',
                'strategy_schedule' => 'UAT berlangsung selama 2 minggu',
                'approval_user_id' => $approvalUser->id,
            ],
            [
                'title' => 'Proposal Upgrade Server',
                'document_type' => 'Proposal',
                'background' => 'Performance drop saat traffic tinggi',
                'objective' => 'Upgrade hardware dan load balancer',
                'benefit' => 'Website lebih stabil & cepat',
                'detail' => 'Upgrade RAM, DB tuning, CDN',
                'strategy_schedule' => 'Q4 2025',
                'approval_user_id' => $approvalUser->id,
            ],
            [
                'title' => 'Dokumen Pelatihan Karyawan Baru',
                'document_type' => 'BRD',
                'background' => 'Perlu SOP standar pelatihan internal',
                'objective' => 'Sediakan dokumen onboarding',
                'benefit' => 'Karyawan cepat beradaptasi',
                'detail' => 'PDF materi, jadwal, dan form evaluasi',
                'strategy_schedule' => 'Disiapkan sebelum November 2025',
                'approval_user_id' => $approvalUser->id,
            ],
        ];

        Document::insert($data);
    }
}
