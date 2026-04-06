// ============================================================
// CONFIG.JS — CẤU HÌNH HỆ THỐNG
// ⚠️  FILE NHẠY CẢM — không chia sẻ công khai
// Khi deploy: đặt file này ngoài thư mục public hoặc
// dùng biến môi trường nếu có server
// ============================================================

const CONFIG = {
  // Supabase
  SUPABASE_URL: 'https://tztigowjdbfzalcsyoqj.supabase.co',
  SUPABASE_KEY: 'sb_publishable_jarPut6H_Di8m8M7HNiCpQ_EDBTLXOk',

  // Hệ thống
  TEN_HE_THONG:  'Báo cáo số liệu định kỳ tháng, quý, năm',
  TEN_CO_QUAN:   'hoạt động ngành Nông nghiệp và Môi trường',
  MAT_KHAU_MAC_DINH: 'snnmt',

  // Tên bảng DB
  BANG: {
    DANH_SACH_BANG:  'danh_sach_bang',
    CHI_TIEU:        'chi_tieu',
    KY_BAO_CAO:      'ky_bao_cao',
    TAI_KHOAN:       'tai_khoan',
    PHAN_QUYEN_BANG: 'phan_quyen_bang',
    CSDL_PREFIX:     'csdl_',   // + maBang.toLowerCase() → csdl_bang_01, csdl_bang_02...
  },
};
// Thêm vào cuối file config.js
CONFIG.GANTT_URL = "https://docs.google.com/spreadsheets/d/1Z13uBmPCWy-GE1Q4TsYYEhGsqrKT0uP78DoSqhIs9WI/htmlembed?widget=true&headers=false";
CONFIG.GANTT_MA_BANG = "GANTT_TIEN_DO"; // Mã này dùng để phân quyền trong Admin