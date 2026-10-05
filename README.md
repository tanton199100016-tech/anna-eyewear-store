# Anna Eyewear Store

Trang cửa hàng kính Anna dạng HTML/CSS/JS thuần, lấy cảm hứng từ `kinhmatanna.com`.

## Chạy local

```bash
npm run dev
```

Mở `http://localhost:4173` (hoặc port được ghi trong terminal).

## Tính năng

- Chi tiết sản phẩm theo hash route `#san-pham/<id>`.
- Giỏ hàng dạng drawer, cập nhật số lượng, phí ship và lưu trong `localStorage`.
- Form đặt hàng lưu cục bộ khi chưa có Supabase hoặc ghi vào `orders` và `order_items` khi đã cấu hình.
- Catalog đọc từ `public.products` nếu Supabase có dữ liệu; nếu không sẽ dùng catalog mẫu trong `script.js`.

## Supabase

1. Mở SQL Editor của project `fuipofqvdaihllpozyvz`.
2. Chạy `supabase/schema.sql`.
3. Chạy `supabase/seed.sql`.
4. Publishable key nằm trong `public/supabase-config.js`; chỉ dùng key public, không đưa service role key lên client.

Các policy hiện tại cho phép đọc sản phẩm active và tạo đơn hàng/chi tiết đơn hàng từ storefront.
