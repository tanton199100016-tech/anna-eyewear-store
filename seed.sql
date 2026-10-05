-- Product catalog seed for the Anna storefront.
insert into public.products
  (id, sku, name, category, price, image, description, material, measurements, shape, fit, badge, colors, is_active)
values
  ('an221393', 'AN221393', 'Gọng nhựa Anna AN221393', 'frames', 350000, 'best-1.jpg', 'Một dáng kính cân bằng giữa nét mềm và đường nét hiện đại. Phần cầu kính thấp giúp gọng ngồi ổn định, nhẹ mặt trong cả ngày.', 'Nhựa acetate', '50 · 18 · 145', 'Vuông mềm', 'Mặt nhỏ đến vừa', 'Bán chạy', array['Havana trong', 'Nâu trà'], true),
  ('an086', 'AN086', 'Gọng nhựa cứng Anna AN086', 'frames', 800000, 'best-2.jpg', 'Dáng chữ nhật cổ điển, càng kính chắc tay và bảng màu khói dễ phối. Lựa chọn sáng cho người thích vẻ gọn gàng, có cấu trúc.', 'Acetate vân khói', '52 · 17 · 146', 'Chữ nhật', 'Mặt vừa đến rộng', 'Được yêu thích', array['Đen khói', 'Nâu đồi'], true),
  ('an226825', 'AN226825', 'Gọng cốt kim loại Anna AN226825', 'frames', 550000, 'best-3.jpg', 'Cốt kim loại thanh, tạo cảm giác thoáng trên gương mặt. Màu champagne làm dịu tổng thể và hợp cả phong cách tối giản lẫn nữ tính.', 'Kim loại mảnh', '50 · 22 · 150', 'Browline', 'Mặt nhỏ đến vừa', 'Nhẹ mặt', array['Vàng champagne', 'Bạc'], true),
  ('an221415', 'AN221415', 'Gọng càng kim loại Anna AN221415', 'frames', 400000, 'best-4.jpg', 'Mắt kính hơi vát lên ở đuôi, đủ tạo điểm nhấn nhưng vẫn dễ đeo hằng ngày. Càng kim loại giúp tổng thể thanh hơn.', 'Nhựa pha kim loại', '51 · 19 · 145', 'Mắt mèo nhẹ', 'Mặt nhỏ đến vừa', 'Mới về', array['Nâu hồng', 'Đen'], true),
  ('tr8076', 'TR8076', 'Gọng nhựa Anna TR8076', 'frames', 300000, 'best-5.jpg', 'Khung bo vuông vừa vặn với nhịp sống hàng ngày. Chất nhựa dẻo nhẹ, phù hợp khi bạn cần một chiếc gọng dễ đeo và dễ chăm.', 'Nhựa dẻo', '52 · 20 · 145', 'Bo vuông', 'Mặt vừa', 'Giá tốt', array['Đen trong', 'Xám khói'], true),
  ('sm21007', 'SM21007', 'Gọng khoan Anna SM21007', 'frames', 450000, 'best-6.jpg', 'Thiết kế khoan mở giúp khuôn mặt nhẹ và sáng. Đây là dáng kính dành cho người thích phụ kiện tinh tế, gần như không chiếm chỗ.', 'Titan mảnh', '53 · 17 · 145', 'Không viền', 'Mặt vừa đến rộng', 'Không viền', array['Xám bạc', 'Nâu đồng'], true),
  ('tr27075', 'TR27075', 'Gọng thời trang Anna TR27075', 'frames', 280000, 'new-1.jpg', 'Một dáng mắt mèo gọn, sắc nhưng không kén mặt. Phần sống mũi được cân chỉnh để tạo cảm giác cao và thoáng.', 'Nhựa bóng', '51 · 19 · 144', 'Mắt mèo', 'Mặt nhỏ đến vừa', 'Sản phẩm mới', array['Đen bóng', 'Nâu cacao'], true),
  ('tn3284', 'TN3284', 'Gọng thời trang Anna TN3284', 'frames', 1600000, 'new-2.jpg', 'Dòng gọng cao cấp với phần cốt titan bền, nhẹ và giữ dáng tốt. Các đường cong được tiết chế để đeo lâu vẫn thoải mái.', 'Titan cao cấp', '53 · 18 · 146', 'Vuông bo', 'Mặt vừa đến rộng', 'Premium', array['Đen than', 'Nâu trà'], true),
  ('tittc041', 'TITTC-041', 'Gọng titan Anna TC-041', 'frames', 580000, 'new-3.jpg', 'Dáng panto tròn vừa đủ, kết hợp cùng chất titan nhẹ. Một lựa chọn cân bằng cho tủ kính tối giản.', 'Titan', '50 · 20 · 145', 'Panto', 'Mặt nhỏ đến vừa', 'Titan', array['Vàng nhạt', 'Bạc'], true),
  ('s01010', 'S01010', 'Gọng thời trang Anna S01010', 'frames', 580000, 'new-4.jpg', 'Khung bầu dục thân thiện với gương mặt nhỏ. Hoạ tiết Havana đem lại chút ấm áp cho những bộ đồ đơn sắc.', 'Nhựa dẻo', '51 · 18 · 143', 'Bầu dục', 'Mặt nhỏ đến vừa', 'Sản phẩm mới', array['Havana mật ong', 'Đen'], true),
  ('s0958', 'S0958', 'Gọng thời trang Anna S0958', 'frames', 580000, 'new-5.jpg', 'Dáng chữ nhật mềm với phần viền vừa phải, dễ phối cùng sơ mi, blazer và đồ casual.', 'Nhựa acetate', '52 · 17 · 145', 'Chữ nhật mềm', 'Mặt vừa', 'Sản phẩm mới', array['Xám trong', 'Nâu hổ phách'], true),
  ('s868', 'S868', 'Gọng thời trang Anna S868', 'frames', 680000, 'new-6.jpg', 'Một chút cá tính nằm ở đường viền mắt mèo vuông. Gọng mảnh giúp màu sắc nổi lên vừa đủ, không làm nặng gương mặt.', 'Kim loại phủ màu', '52 · 19 · 145', 'Mắt mèo vuông', 'Mặt vừa', 'Sản phẩm mới', array['Đỏ rượu', 'Đen'], true)
on conflict (id) do update set
  sku = excluded.sku,
  name = excluded.name,
  category = excluded.category,
  price = excluded.price,
  image = excluded.image,
  description = excluded.description,
  material = excluded.material,
  measurements = excluded.measurements,
  shape = excluded.shape,
  fit = excluded.fit,
  badge = excluded.badge,
  colors = excluded.colors,
  is_active = excluded.is_active;
