var EXPLAIN_MAP = {
  750: 'Kỷ Thành Băng (Kỷ Cryogen). Các sông băng có thể đã bao phủ toàn bộ hành tinh trong thời kỳ băng hà lớn nhất được biết đến trên Trái đất. Các dạng sống mới như tảo đỏ và tảo lục xuất hiện trong thời kỳ này.',
  600: 'Kỷ Ediacara. Sự sống đang phát triển dưới biển và sự sống đa bào chỉ mới bắt đầu xuất hiện.',
  540: 'Kỷ Cambri sớm. Một cuộc tuyệt chủng hàng loạt vừa diễn ra. Sau đó, hồ sơ hóa thạch cho thấy sự mở rộng đáng kể của đời sống động vật dưới biển, được gọi là "vụ nổ kỷ Cambri". Động vật đang bắt đầu tiến hóa vỏ và bộ xương ngoài.',
  500: 'Kỷ Cambri muộn. Đại dương đang tràn ngập sự sống sau sự mở rộng đáng kể của sự đa dạng động vật dưới biển, được gọi là "vụ nổ kỷ Cambri". Hình dạng của một số động vật cho thấy giống tổ tiên của động vật hiện đại.',
  470: 'Kỷ Ordovic. Các vùng biển rất đa dạng và những rạn san hô đầu tiên xuất hiện. Tảo là thực vật đa bào duy nhất và vẫn chưa có đời sống phức tạp trên cạn. Cá không hàm, động vật có xương sống đầu tiên xuất hiện.',
  450: 'Kỷ Ordovic muộn. Các vùng biển rất đa dạng và những rạn san hô đầu tiên đã xuất hiện. Tảo là thực vật đa bào duy nhất và vẫn chưa có đời sống phức tạp trên cạn. Cá không hàm, động vật có xương sống đầu tiên xuất hiện. Một cuộc tuyệt chủng hàng loạt sắp diễn ra.',
  430: 'Kỷ Silur. Một cuộc tuyệt chủng hàng loạt đã diễn ra, xóa sổ gần một nửa số loài động vật không xương sống ở biển. Những loài thực vật trên cạn đầu tiên xuất hiện, bắt đầu từ rìa đại dương. Thực vật tiến hóa về hệ mạch, khả năng vận chuyển nước và chất dinh dưỡng qua các mô của chúng. Cuộc sống đại dương trở nên lớn hơn và phức tạp hơn, và một số sinh vật mạo hiểm ra khỏi các rạn san hô và lên đất liền.',
  400: 'Kỷ Devon. Cuộc sống trên cạn trở nên phức tạp hơn khi thực vật phát triển. Các loài côn trùng đa dạng hóa và cá phát triển các vây cứng cáp, cuối cùng chúng phát triển thành các chi. Những động vật có xương sống đầu tiên đi trên cạn. Các đại dương và các rạn san hô là nơi sinh sống của nhiều loại cá, cá mập, bọ cạp biển và động vật chân đầu.',
  370: 'Kỷ Devon muộn. Cuộc sống trên cạn trở nên phức tạp hơn khi thực vật phát triển. Các loài côn trùng đa dạng hóa và cá phát triển các vây cứng cáp, cuối cùng chúng phát triển thành các chi. Những động vật có xương sống đầu tiên đi bộ trên cạn. Các đại dương và các rạn san hô là nơi sinh sống của nhiều loại cá, cá mập, bọ cạp biển và động vật chân đầu. Một cuộc tuyệt chủng hàng loạt sắp diễn ra sẽ gây căng thẳng cho các sinh vật biển.',
  340: 'Kỷ Than Đá. Một vụ tuyệt chủng hàng loạt đã gây hại cho các sinh vật biển, nhưng các sinh vật trên cạn đã thích nghi. Thực vật đang phát triển hệ thống rễ cho phép chúng phát triển lớn hơn và di chuyển vào đất liền. Môi trường đang phát triển bên dưới tán cây. Ôxy trong khí quyển tăng lên khi thực vật lan rộng trên đất liền. Các loài bò sát ban đầu đang tiến hóa.',
  300: 'Kỷ Than Đá muộn. Thực vật phát triển hệ thống rễ cho phép chúng phát triển lớn hơn và di chuyển vào đất liền. Môi trường phát triển bên dưới tán cây. Ôxy trong khí quyển tăng lên khi thực vật lan rộng trên đất liền. Các loài bò sát ban đầu đã tiến hóa, và côn trùng khổng lồ đa dạng hóa.',
  280: 'Kỷ Permi. Kỷ Permi đã hợp nhất và hình thành nên siêu lục địa Pangea. Các điều kiện khắc nghiệt như các chỏm băng ở vùng cực và sa mạc đã hạn chế phạm vi sống của thực vật, nhưng các loài động vật bốn chân lưỡng cư và bò sát lại đa dạng hóa nơi thực vật phát triển. Các đại dương chứa đầy cá và sự sống của động vật không xương sống.',
  260: 'Kỷ Permi muộn. Cuộc đại tuyệt chủng hàng loạt lớn nhất trong lịch sử sắp diễn ra, khiến 90% số loài bị tuyệt chủng. Sự tuyệt chủng của các loài thực vật đã làm giảm nguồn cung cấp thức ăn cho các loài bò sát ăn cỏ lớn và loại bỏ môi trường sống cho côn trùng.',
  240: 'Trias sớm (Trias sớm là thế đầu tiên trong 3 thế của Kỷ Tam Điệp). Mức oxy thấp hơn đáng kể do sự tuyệt chủng của nhiều loài thực vật trên cạn. Nhiều loài san hô đã tuyệt chủng, với những rạn san hô mất hàng triệu năm để hình thành lại. Tổ tiên nhỏ của các loài chim, động vật có vú và khủng long vẫn tồn tại.',
  220: 'Trias giữa (Trias giữa là thế thứ hai trong 3 thế của Kỷ Tam Điệp). Trái đất đang phục hồi sau cuộc đại tuyệt chủng kỷ Permi - kỷ Tam Điệp. Những con khủng long nhỏ bắt đầu xuất hiện. Bộ Cung thú và Thằn lằn chúa xuất hiện cùng với những động vật có xương sống biết bay đầu tiên.',
  200: 'Trias muộn. Một sự kiện tuyệt chủng sắp xảy ra, dẫn đến sự biến mất của 76% tất cả các loài sinh vật trên cạn và dưới biển và làm giảm đáng kể các quần thể sống sót. Một số gia đình, chẳng hạn như dực long, cá sấu, động vật có vú và cá bị ảnh hưởng nhẹ. Những con khủng long thực sự đầu tiên xuất hiện.',
  170: 'Kỷ Jura. Khủng long phát triển mạnh khi các loài động vật có vú và chim đầu tiên tiến hóa. Sự sống ở đại dương đa dạng và Trái đất rất ấm.',
  150: 'Jura Muộn (Jura Muộn là thế thứ ba trong kỷ Jura). Thằn lằn sớm nhất đã xuất hiện và các động vật có vú có nhau thai nguyên thủy đã tiến hóa. Khủng long thống trị cả hai vùng đất liền. Các loài bò sát biển lớn sinh sống ở đại dương, và Dực long là động vật có xương sống bay chiếm ưu thế.',
  120: 'Phấn Trắng sớm (Phấn Trắng sớm hay Phấn Trắng hạ là một trong hai thế/thống của kỷ Phấn Trắng). Thế giới ấm áp và không có các chỏm băng ở hai cực. Các loài bò sát lớn chiếm ưu thế và động vật có vú vẫn còn nhỏ. Thực vật có hoa phát triển và lan rộng khắp thế giới.',
  105: 'Kỷ Phấn Trắng. Khủng long Ceratopsian và Pachycephalosaurus tiến hóa. Các nhóm động vật có vú, chim và côn trùng hiện đại xuất hiện.',
  90: 'Kỷ Phấn Trắng. Khủng long Ceratopsian và Pachycephalosaurus tiến hóa. Các nhóm động vật có vú, chim và côn trùng hiện đại xuất hiện.',
  66: 'Phấn Trắng muộn (Phấn Trắng muộn là một trong hai thế của kỷ Phấn Trắng). Một cuộc tuyệt chủng hàng loạt xảy ra, dẫn đến sự tuyệt chủng của khủng long, nhiều loài bò sát biển, tất cả các loài bò sát bay, và nhiều động vật không xương sống ở biển và các loài khác. Các nhà khoa học tin rằng sự tuyệt chủng là do tác động của một tiểu hành tinh trên bán đảo Yucatan ngày nay ở Mexico.',
  50: 'Kỷ Đệ Tam sớm. Sau vụ va chạm của tiểu hành tinh giết chết khủng long, các loài chim, động vật có vú và bò sát còn sống sót trở nên đa dạng. Cá voi ban đầu tiến hóa từ động vật có vú trên cạn.',
  35: 'Kỷ Đệ Tam giữa. Động vật có vú đã phát triển từ dạng nhỏ, đơn giản thành một nhóm đa dạng. Động vật linh trưởng, động vật giáp xác và các nhóm khác tiến hóa. Trái đất nguội đi và thực vật rụng lá trở nên phổ biến hơn.',
  20: 'Kỷ Tân Cận. Động vật có vú và chim tiếp tục phát triển thành các dạng hiện đại. Hominids (Họ Người) sớm xuất hiện ở Châu Phi.',
  0: ''
};
