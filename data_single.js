const rawExamDataSingle = [
  // ==========================================
  // BÀI 1 
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>NOTICE TO ALL STAFF</b><br><br>Beginning next Monday, all requests for office supplies must be submitted through our new online portal. Paper forms will no longer be accepted. Please contact the IT department if you need login credentials."],
    questions: [
      { 
        text: "What is the main purpose of the notice?", 
        options: { A: "To announce a new office location", B: "To explain a change in a procedure", C: "To introduce a new IT manager", D: "To promote a supply sale" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Beginning next Monday, all requests for office supplies must be submitted through our new online portal. Paper forms will no longer be accepted.",
          ham_y: "Công ty đang chuyển quy trình từ dùng giấy tờ truyền thống sang hệ thống trực tuyến, đây chính là sự thay đổi trong quy trình.<br>↳ <i>'new online portal'</i> (cổng trực tuyến mới) = <i>'a change in a procedure'</i> (một sự thay đổi quy trình).",
          lien_he: "Trong thực tế công sở, khi một công ty muốn số hóa (digitize) quy trình làm việc, họ thường ra thông báo yêu cầu nhân viên ngừng sử dụng giấy tờ (paper forms) và chuyển sang dùng hệ thống trực tuyến (online portal). Bài đọc này là một ví dụ điển hình cho sự thay đổi đó.",
          tu_vung: [
            { tu: "procedure", nghia: "quy trình" },
            { tu: "submit", nghia: "nộp, đệ trình" },
            { tu: "office supplies", nghia: "văn phòng phẩm" },
            { tu: "portal", nghia: "cổng thông tin trực tuyến" },
            { tu: "promote", nghia: "quảng bá, thúc đẩy" }
          ],
          dich_bai: "<b>THÔNG BÁO GỬI TOÀN THỂ NHÂN VIÊN</b><br><br>Bắt đầu từ thứ Hai tới, tất cả các yêu cầu về văn phòng phẩm phải được nộp qua cổng thông tin trực tuyến mới của chúng tôi. Các biểu mẫu bằng giấy sẽ không còn được chấp nhận nữa. Vui lòng liên hệ với bộ phận IT nếu bạn cần thông tin đăng nhập."
        }
      },
      { 
        text: "What should employees do if they cannot log in?", 
        options: { A: "Submit a paper form", B: "Order supplies elsewhere", C: "Speak with the IT department", D: "Wait until next Monday" }, 
        correct: "C", 
        explanation: {
          dan_chung: "Please contact the IT department if you need login credentials.",
          ham_y: "Người lao động được yêu cầu liên hệ bộ phận IT khi cần cấp quyền đăng nhập, điều này giải quyết tình huống không thể đăng nhập.<br>↳ <i>'contact the IT department'</i> (liên hệ bộ phận IT) = <i>'Speak with the IT department'</i> (Nói chuyện với bộ phận IT).",
          lien_he: "Bộ phận IT (Công nghệ thông tin) luôn chịu trách nhiệm cấp phát và quản lý tài khoản (login credentials) cho nhân viên. Do đó, bất cứ khi nào gặp trục trặc về việc đăng nhập, người cần liên hệ luôn là IT.",
          tu_vung: [
            { tu: "credential", nghia: "thông tin xác thực (tên đăng nhập, mật khẩu)" },
            { tu: "elsewhere", nghia: "ở nơi khác" },
            { tu: "contact", nghia: "liên hệ" }
          ],
          dich_bai: "<b>THÔNG BÁO GỬI TOÀN THỂ NHÂN VIÊN</b><br><br>Bắt đầu từ thứ Hai tới, tất cả các yêu cầu về văn phòng phẩm phải được nộp qua cổng thông tin trực tuyến mới của chúng tôi. Các biểu mẫu bằng giấy sẽ không còn được chấp nhận nữa. Vui lòng liên hệ với bộ phận IT nếu bạn cần thông tin đăng nhập."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 2 
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>Dine at The Green Garden</b><br><br>Enjoy our farm-to-table seasonal menu. We are now open for weekend brunch from 10:00 A.M. to 2:00 P.M. Reservations are recommended for groups of five or more."],
    questions: [
      { 
        text: "What is indicated about The Green Garden?", 
        options: { A: "It is only open on weekends.", B: "It recently changed its menu.", C: "It specializes in breakfast items.", D: "It serves food made with local ingredients." }, 
        correct: "D", 
        explanation: {
          dan_chung: "Enjoy our farm-to-table seasonal menu.",
          ham_y: "Nhà hàng sử dụng mô hình từ nông trại đến bàn ăn, ám chỉ việc sử dụng trực tiếp các nguồn nguyên liệu từ địa phương.<br>↳ <i>'farm-to-table'</i> (từ nông trại đến bàn ăn) = <i>'food made with local ingredients'</i> (thức ăn làm từ nguyên liệu địa phương).",
          lien_he: "Xu hướng 'farm-to-table' (từ nông trại đến bàn ăn) đang rất phổ biến ở các nhà hàng hiện đại, đề cao việc nhập nguyên liệu sạch trực tiếp từ các nông trại địa phương (local ingredients) thay vì qua trung gian.",
          tu_vung: [
            { tu: "farm-to-table", nghia: "mô hình từ nông trại đến bàn ăn" },
            { tu: "seasonal", nghia: "theo mùa" },
            { tu: "indicate", nghia: "chỉ ra, cho biết" },
            { tu: "specialize in", nghia: "chuyên về" },
            { tu: "ingredient", nghia: "nguyên liệu" }
          ],
          dich_bai: "<b>Dùng bữa tại The Green Garden</b><br><br>Hãy thưởng thức thực đơn theo mùa sử dụng nguyên liệu trực tiếp từ nông trại của chúng tôi. Hiện tại, chúng tôi mở cửa phục vụ bữa gộp sáng-trưa (brunch) vào cuối tuần từ 10:00 Sáng đến 2:00 Chiều. Khuyến khích đặt bàn trước đối với nhóm từ 5 người trở lên."
        }
      },
      { 
        text: "When is brunch served?", 
        options: { A: "On Saturdays and Sundays", B: "Every morning", C: "Only on holidays", D: "Daily until 2:00 P.M." }, 
        correct: "A", 
        explanation: {
          dan_chung: "We are now open for weekend brunch from 10:00 A.M. to 2:00 P.M.",
          ham_y: "Bữa ăn gộp sáng-trưa được phục vụ vào cuối tuần, tương đương với việc phục vụ vào Thứ Bảy và Chủ Nhật.<br>↳ <i>'weekend'</i> (cuối tuần) = <i>'Saturdays and Sundays'</i> (Thứ Bảy và Chủ Nhật).",
          lien_he: "Brunch là bữa ăn kết hợp giữa breakfast (sáng) và lunch (trưa), thường được phục vụ vào cuối tuần (Saturdays and Sundays) khi mọi người có xu hướng thức dậy muộn và đi ăn nhà hàng.",
          tu_vung: [
            { tu: "brunch", nghia: "bữa ăn gộp sáng và trưa" },
            { tu: "reservation", nghia: "sự đặt chỗ" },
            { tu: "recommend", nghia: "khuyên dùng, đề xuất" }
          ],
          dich_bai: "<b>Dùng bữa tại The Green Garden</b><br><br>Hãy thưởng thức thực đơn theo mùa sử dụng nguyên liệu trực tiếp từ nông trại của chúng tôi. Hiện tại, chúng tôi mở cửa phục vụ bữa gộp sáng-trưa (brunch) vào cuối tuần từ 10:00 Sáng đến 2:00 Chiều. Khuyến khích đặt bàn trước đối với nhóm từ 5 người trở lên."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 3
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>From:</b> Logistics Team<br><b>To:</b> Sarah Jenkins<br><b>Date:</b> October 12<br><b>Subject:</b> Delayed Shipment<br><br>We apologize that your order #5592 is delayed due to severe weather conditions at our shipping hub. We expect it to arrive by Friday. As a gesture of goodwill, we have credited $10 to your account."],
    questions: [
      { 
        text: "Why is the shipment late?", 
        options: { A: "The item is out of stock.", B: "The address was incorrect.", C: "Bad weather", D: "A system error" }, 
        correct: "C", 
        explanation: {
          dan_chung: "We apologize that your order #5592 is delayed due to severe weather conditions at our shipping hub.",
          ham_y: "Nguyên nhân lô hàng bị chậm trễ là do điều kiện thời tiết khắc nghiệt tại trung tâm vận chuyển.<br>↳ <i>'severe weather conditions'</i> (điều kiện thời tiết khắc nghiệt) = <i>'Bad weather'</i> (Thời tiết xấu).",
          lien_he: "Thời tiết xấu (severe weather / bad weather) như bão tuyết, mưa lớn là nguyên nhân bất khả kháng thường gặp nhất khiến các công ty vận chuyển (Logistics) bị trễ tiến độ giao hàng.",
          tu_vung: [
            { tu: "shipment", nghia: "lô hàng, việc giao hàng" },
            { tu: "delayed / late", nghia: "bị trì hoãn / trễ" },
            { tu: "severe", nghia: "khắc nghiệt, nghiêm trọng" },
            { tu: "out of stock", nghia: "hết hàng" }
          ],
          dich_bai: "<b>Từ:</b> Đội ngũ Hậu cần<br><b>Gửi tới:</b> Sarah Jenkins<br><b>Ngày:</b> 12 tháng 10<br><b>Chủ đề:</b> Chuyến hàng bị chậm trễ<br><br>Chúng tôi xin lỗi vì đơn hàng #5592 của bạn bị giao chậm do điều kiện thời tiết khắc nghiệt tại trung tâm vận chuyển của chúng tôi. Chúng tôi dự kiến hàng sẽ đến nơi vào thứ Sáu. Như một cử chỉ thiện chí, chúng tôi đã cộng thêm 10 đô la vào tài khoản của bạn."
        }
      },
      { 
        text: "What did the company do for Ms. Jenkins?", 
        options: { A: "Reshipped the order", B: "Gave her a partial refund/credit", C: "Called her on the phone", D: "Canceled her order" }, 
        correct: "B", 
        explanation: {
          dan_chung: "As a gesture of goodwill, we have credited $10 to your account.",
          ham_y: "Công ty đã cộng thêm tiền vào tài khoản của khách hàng như một cử chỉ thiện chí, đây là một hình thức hoàn tiền hoặc cấp tín dụng.<br>↳ <i>'credited $10 to your account'</i> (cộng 10 đô la vào tài khoản) = <i>'Gave her a partial refund/credit'</i> (Hoàn tiền một phần / cấp tín dụng).",
          lien_he: "Để xoa dịu khách hàng khi giao hàng trễ, các công ty thường có chính sách bồi thường thiện chí (gesture of goodwill), phổ biến nhất là tặng tiền trực tiếp vào tài khoản (credit to account) để khách dùng cho lần mua sau.",
          tu_vung: [
            { tu: "gesture of goodwill", nghia: "cử chỉ thiện chí" },
            { tu: "credit", nghia: "cộng tiền vào tài khoản (động từ)" },
            { tu: "partial refund", nghia: "hoàn tiền một phần" },
            { tu: "reship", nghia: "gửi lại hàng" }
          ],
          dich_bai: "<b>Từ:</b> Đội ngũ Hậu cần<br><b>Gửi tới:</b> Sarah Jenkins<br><b>Ngày:</b> 12 tháng 10<br><b>Chủ đề:</b> Chuyến hàng bị chậm trễ<br><br>Chúng tôi xin lỗi vì đơn hàng #5592 của bạn bị giao chậm do điều kiện thời tiết khắc nghiệt tại trung tâm vận chuyển của chúng tôi. Chúng tôi dự kiến hàng sẽ đến nơi vào thứ Sáu. Như một cử chỉ thiện chí, chúng tôi đã cộng thêm 10 đô la vào tài khoản của bạn."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 4
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>Apex Electronics to Expand</b><br><br>Apex Electronics announced today that it will open three new retail locations in the metropolitan area by the end of the year. This move is expected to create over 100 new jobs."],
    questions: [
      { 
        text: "What is Apex Electronics planning to do?", 
        options: { A: "Close underperforming stores", B: "Hire a new CEO", C: "Increase its number of stores", D: "Sell the company" }, 
        correct: "C", 
        explanation: {
          dan_chung: "Apex Electronics announced today that it will open three new retail locations in the metropolitan area by the end of the year.",
          ham_y: "Động thái mở thêm các địa điểm bán lẻ mới của công ty chính là hành động nhằm gia tăng số lượng cửa hàng hiện có.<br>↳ <i>'open three new retail locations'</i> (mở 3 địa điểm bán lẻ mới) = <i>'Increase its number of stores'</i> (Tăng số lượng cửa hàng).",
          lien_he: "Trong lĩnh vực kinh doanh, khi một công ty làm ăn có lãi, họ thường lên kế hoạch mở rộng (expand) bằng cách mở thêm các chi nhánh mới. Việc này không chỉ giúp tăng doanh thu mà còn tạo ra nhiều cơ hội việc làm mới cho người dân địa phương.",
          tu_vung: [
            { tu: "expand", nghia: "mở rộng" },
            { tu: "announce", nghia: "thông báo" },
            { tu: "retail location", nghia: "địa điểm bán lẻ" },
            { tu: "metropolitan area", nghia: "khu vực trung tâm thành phố, vùng đô thị" },
            { tu: "move", nghia: "động thái, bước đi" }
          ],
          dich_bai: "<b>Apex Electronics mở rộng kinh doanh</b><br><br>Hôm nay, Apex Electronics đã thông báo rằng họ sẽ mở thêm ba địa điểm bán lẻ mới trong khu vực trung tâm thành phố vào cuối năm nay. Động thái này dự kiến sẽ tạo ra hơn 100 việc làm mới."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 5
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>Position: Graphic Designer</b><br><br>Lumina Marketing is seeking a creative professional with at least 3 years of experience in digital media. Candidates must submit a portfolio of their previous work along with their CV."],
    questions: [
      { 
        text: "What must applicants provide?", 
        options: { A: "A list of references", B: "Examples of their work", C: "A certification in coding", D: "A university transcript" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Candidates must submit a portfolio of their previous work along with their CV.",
          ham_y: "Yêu cầu ứng viên nộp hồ sơ năng lực về các sản phẩm trước đây chính là yêu cầu họ cung cấp các ví dụ cụ thể về những gì mình đã làm.<br>↳ <i>'portfolio of their previous work'</i> (hồ sơ công việc trước đây) = <i>'Examples of their work'</i> (Ví dụ về các sản phẩm của họ).",
          lien_he: "Trong các ngành thiên về sáng tạo như Thiết kế (Design), nhà tuyển dụng luôn yêu cầu ứng viên gửi Portfolio. Đây là một tập tài liệu (thường là file PDF hoặc trang web) tổng hợp những thiết kế đẹp nhất của ứng viên để chứng minh năng lực thực tế, thay vì chỉ nói suông trên CV.",
          tu_vung: [
            { tu: "seek", nghia: "tìm kiếm" },
            { tu: "candidate", nghia: "ứng viên" },
            { tu: "submit", nghia: "nộp" },
            { tu: "portfolio", nghia: "hồ sơ năng lực (tập hợp các dự án/sản phẩm đã làm)" },
            { tu: "previous", nghia: "trước đó" }
          ],
          dich_bai: "<b>Vị trí: Thiết kế đồ họa</b><br><br>Lumina Marketing đang tìm kiếm một chuyên gia sáng tạo với ít nhất 3 năm kinh nghiệm trong lĩnh vực truyền thông kỹ thuật số. Các ứng viên phải nộp hồ sơ năng lực (portfolio) về các sản phẩm trước đây của họ cùng với sơ yếu lý lịch (CV)."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 6
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>The City Art Museum</b><br><br>Monday-Friday: 9:00-18:00<br>Saturday: 10:00-20:00<br>Sunday: Closed<br><i>Note: The West Wing is currently closed for renovation until November 5.</i>"],
    questions: [
      { 
        text: "When can people visit the museum late in the evening?", 
        options: { A: "Monday", B: "Friday", C: "Saturday", D: "Sunday" }, 
        correct: "C", 
        explanation: {
          dan_chung: "Saturday: 10:00-20:00",
          ham_y: "Bảo tàng mở cửa đến 8 giờ tối vào ngày thứ Bảy, đây là khung giờ muộn nhất trong tuần, được hiểu là buổi tối muộn.<br>↳ <i>'Saturday: 10:00-20:00'</i> (Thứ Bảy mở đến 20:00) = <i>'late in the evening'</i> (tối muộn).",
          lien_he: "Nhiều bảo tàng và trung tâm thương mại thường kéo dài giờ mở cửa vào dịp cuối tuần (như Thứ Bảy) để phục vụ những khách hàng bận rộn đi làm vào các ngày trong tuần.",
          tu_vung: [
            { tu: "museum", nghia: "bảo tàng" },
            { tu: "closed", nghia: "đóng cửa" },
            { tu: "wing", nghia: "khu vực, chái nhà (của một tòa nhà lớn)" },
            { tu: "currently", nghia: "hiện tại" },
            { tu: "renovation", nghia: "sự nâng cấp, sửa chữa, cải tạo" }
          ],
          dich_bai: "<b>Bảo tàng Nghệ thuật Thành phố</b><br><br>Thứ Hai - Thứ Sáu: 9:00 - 18:00<br>Thứ Bảy: 10:00 - 20:00<br>Chủ Nhật: Đóng cửa<br><i>Lưu ý: Khu phía Tây hiện đang đóng cửa để cải tạo/sửa chữa cho đến ngày 5 tháng 11.</i>"
        }
      },
      { 
        text: "What is mentioned about the West Wing?", 
        options: { A: "It is being repaired.", B: "It is the largest wing.", C: "It houses ancient sculptures.", D: "It is open only on Sundays." }, 
        correct: "A", 
        explanation: {
          dan_chung: "The West Wing is currently closed for renovation until November 5.",
          ham_y: "Khu phía Tây đang trong quá trình cải tạo và sửa chữa nên buộc phải đóng cửa tạm thời.<br>↳ <i>'closed for renovation'</i> (đóng cửa để cải tạo) = <i>'is being repaired'</i> (đang được sửa chữa).",
          lien_he: "Các công trình công cộng lớn đôi khi sẽ đóng cửa từng phần (ví dụ như khu cánh đông, cánh tây) để bảo trì, sửa chữa nhằm không làm gián đoạn hoàn toàn việc tham quan của du khách.",
          tu_vung: [
            { tu: "museum", nghia: "bảo tàng" },
            { tu: "closed", nghia: "đóng cửa" },
            { tu: "wing", nghia: "khu vực, chái nhà (của một tòa nhà lớn)" },
            { tu: "currently", nghia: "hiện tại" },
            { tu: "renovation", nghia: "sự nâng cấp, sửa chữa, cải tạo" }
          ],
          dich_bai: "<b>Bảo tàng Nghệ thuật Thành phố</b><br><br>Thứ Hai - Thứ Sáu: 9:00 - 18:00<br>Thứ Bảy: 10:00 - 20:00<br>Chủ Nhật: Đóng cửa<br><i>Lưu ý: Khu phía Tây hiện đang đóng cửa để cải tạo/sửa chữa cho đến ngày 5 tháng 11.</i>"
        }
      }
    ]
  },

  // ==========================================
  // BÀI 7
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>MEMO</b><br>To: All Tenants<br>From: Property Management<br>Subject: Parking Lot Repaving<br><br>The north parking lot will be closed for repaving from June 10 to June 12. Please use the south lot during this time. Vehicles left in the north lot will be towed at the owner's expense."],
    questions: [
      { 
        text: "What will happen between June 10 and June 12?", 
        options: { A: "A new building will be built.", B: "A parking lot will be fixed.", C: "A tenant meeting will occur.", D: "The south lot will be closed." }, 
        correct: "B", 
        explanation: {
          dan_chung: "The north parking lot will be closed for repaving from June 10 to June 12.",
          ham_y: "Hành động lát lại mặt đường cho bãi đậu xe chính là một công việc sửa chữa và nâng cấp cơ sở hạ tầng.<br>↳ <i>'repaving'</i> (lát lại mặt đường) = <i>'will be fixed'</i> (sẽ được sửa chữa).",
          lien_he: "Khi ban quản lý tiến hành thi công, họ luôn dán thông báo trước và yêu cầu di dời tài sản cá nhân. Cụm 'towed at the owner's expense' là một lời cảnh báo rất quen thuộc: nếu bạn vi phạm quy định đỗ xe, xe bạn sẽ bị cẩu đi và bạn phải trả tiền chuộc xe.",
          tu_vung: [
            { tu: "tenant", nghia: "người thuê nhà / thuê văn phòng" },
            { tu: "repave", nghia: "lát lại mặt đường" },
            { tu: "tow", nghia: "kéo, cẩu (xe) đi" },
            { tu: "at the owner's expense", nghia: "chủ sở hữu phải tự trả chi phí" }
          ],
          dich_bai: "<b>THÔNG BÁO NỘI BỘ</b><br>Gửi tới: Tất cả người thuê nhà<br>Từ: Ban quản lý tòa nhà<br>Chủ đề: Lát lại mặt đường bãi đậu xe<br><br>Bãi đậu xe phía bắc sẽ đóng cửa để lát lại mặt đường từ ngày 10 tháng 6 đến ngày 12 tháng 6. Vui lòng sử dụng bãi đậu xe phía nam trong thời gian này. Bất kỳ phương tiện nào đậu lại ở bãi phía bắc sẽ bị cẩu đi và chủ xe phải chịu mọi chi phí."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 8
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: ["<b>Global Tech Summit</b><br><br>Join us for the annual summit on November 15 at the Grand Plaza Hotel. Keynote speakers include Dr. Aris Thorne and Elena Rodriguez. Register by Oct 1 for an early-bird discount."],
    questions: [
      { 
        text: "How can people save money on registration?", 
        options: { A: "By bringing a friend", B: "By registering before October 1", C: "By staying at the hotel", D: "By being a student" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Register by Oct 1 for an early-bird discount.",
          ham_y: "Người tham gia sẽ được hưởng chiết khấu ưu đãi nếu đăng ký sớm trước thời hạn mùng 1 tháng 10, giúp họ tiết kiệm chi phí.<br>↳ <i>'early-bird discount'</i> (giảm giá đăng ký sớm) = <i>'save money'</i> (tiết kiệm tiền).",
          lien_he: "'Early-bird' (dậy sớm) là một chiến lược marketing cực kỳ phổ biến tại các sự kiện hoặc khóa học. Ban tổ chức sẽ giảm giá mạnh cho những người đăng ký và đóng tiền sớm nhằm thăm dò số lượng người tham dự để chuẩn bị cơ sở vật chất tốt hơn.",
          tu_vung: [
            { tu: "summit", nghia: "hội nghị cấp cao" },
            { tu: "annual", nghia: "thường niên, hằng năm" },
            { tu: "keynote speaker", nghia: "diễn giả chính" },
            { tu: "register", nghia: "đăng ký" },
            { tu: "early-bird discount", nghia: "chiết khấu/giảm giá cho người đăng ký sớm" }
          ],
          dich_bai: "<b>Hội nghị Công nghệ Toàn cầu</b><br><br>Hãy tham gia cùng chúng tôi tại hội nghị thường niên vào ngày 15 tháng 11 tại Khách sạn Grand Plaza. Các diễn giả chính bao gồm Tiến sĩ Aris Thorne và Elena Rodriguez. Đăng ký trước ngày 1 tháng 10 để nhận được chiết khấu ưu đãi cho người đăng ký sớm (early-bird)."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 9
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: [
      "<b>To:</b> Peter Burstein<br><b>From:</b> Calle Nilsson<br><b>Subject:</b> Meeting rescheduled<br><b>Date:</b> 22 October<br><br>Hi Peter,<br><br>Next week's meeting needs to be rescheduled. The new office assistant, Martina, did not take into consideration that the clients' offices are located throughout the world and in a variety of time zones. Several would have had to stay after closing time in order to attend the meeting. I have already canceled the original meeting and sent apologies for the inconvenience.<br><br>Could you please find time to review this with Martina? This is a task she will be performing regularly. I should have had you work with her before asking her to set up the appointment.<br><br>Thank you,<br><br>Calle Nilsson, Office Manager<br>Creatyx of Sweden AB"
    ],
    questions: [
      { 
        text: "Why did Ms. Nilsson send the e-mail?", 
        options: { A: "To set up an interview", B: "To suggest a new client", C: "To announce a new calendar system", D: "To request that an employee be trained" }, 
        correct: "D", 
        explanation: {
          dan_chung: "Could you please find time to review this with Martina? This is a task she will be performing regularly.",
          ham_y: "Người quản lý nhờ một nhân viên có kinh nghiệm xem xét và hướng dẫn lại quy trình làm việc cho nhân viên mới.<br>↳ <i>'review this with Martina'</i> (xem xét lại với Martina) = <i>'request that an employee be trained'</i> (yêu cầu đào tạo nhân viên).",
          lien_he: "Trong môi trường làm việc, khi nhân viên mới mắc sai lầm do chưa quen việc (ở đây là xếp lịch họp sai múi giờ), người quản lý thường sẽ nhờ các nhân viên cũ có kinh nghiệm kèm cặp và hướng dẫn (training) lại quy trình cho họ.",
          tu_vung: [
            { tu: "reschedule", nghia: "dời lịch, đổi lịch" },
            { tu: "take into consideration", nghia: "xem xét, cân nhắc" },
            { tu: "time zone", nghia: "múi giờ" },
            { tu: "inconvenience", nghia: "sự bất tiện" },
            { tu: "appointment", nghia: "cuộc hẹn" }
          ],
          dich_bai: "<b>Từ:</b> Calle Nilsson<br><b>Chủ đề:</b> Dời lịch họp<br><br>Chào Peter, Cuộc họp tuần tới cần được dời lịch. Martina, trợ lý văn phòng mới, đã không tính đến việc văn phòng của các khách hàng nằm ở khắp nơi trên thế giới và ở nhiều múi giờ khác nhau. Một vài người sẽ phải ở lại sau giờ đóng cửa để tham gia cuộc họp. Tôi đã hủy cuộc họp ban đầu và gửi lời xin lỗi vì sự bất tiện này.<br><br>Bạn có thể sắp xếp thời gian để xem lại vấn đề này cùng với Martina không? Đây là một nhiệm vụ mà cô ấy sẽ thực hiện thường xuyên. Đáng lẽ tôi nên để bạn làm việc cùng cô ấy trước khi yêu cầu cô ấy thiết lập cuộc hẹn."
        }
      },
      { 
        text: "What was wrong with the original time of the meeting?", 
        options: { A: "It was scheduled during an office holiday.", B: "It was not convenient for international clients.", C: "Ms. Nilsson was not available on that date.", D: "The room was being used by Mr. Burstein." }, 
        correct: "B", 
        explanation: {
          dan_chung: "the clients' offices are located throughout the world and in a variety of time zones. Several would have had to stay after closing time...",
          ham_y: "Khách hàng ở các múi giờ khác nhau trên thế giới phải ở lại văn phòng sau giờ làm việc, điều này gây ra sự bất tiện lớn cho họ.<br>↳ <i>'located throughout the world'</i> (ở khắp nơi trên thế giới) = <i>'international clients'</i> (khách hàng quốc tế); <i>'stay after closing time'</i> (ở lại sau giờ đóng cửa) = <i>'not convenient'</i> (không thuận tiện).",
          lien_he: "Khi làm việc với các đối tác toàn cầu (Global Partners), việc quan trọng nhất là phải chú ý đến chênh lệch múi giờ (Time Zone differences). Một giờ họp lý tưởng phải là giờ hành chính chung (overlap) mà tất cả các bên đều đang thức và làm việc.",
          tu_vung: [
            { tu: "reschedule", nghia: "dời lịch, đổi lịch" },
            { tu: "take into consideration", nghia: "xem xét, cân nhắc" },
            { tu: "time zone", nghia: "múi giờ" },
            { tu: "inconvenience", nghia: "sự bất tiện" },
            { tu: "appointment", nghia: "cuộc hẹn" }
          ],
          dich_bai: "<b>Từ:</b> Calle Nilsson<br><b>Chủ đề:</b> Dời lịch họp<br><br>Chào Peter, Cuộc họp tuần tới cần được dời lịch. Martina, trợ lý văn phòng mới, đã không tính đến việc văn phòng của các khách hàng nằm ở khắp nơi trên thế giới và ở nhiều múi giờ khác nhau. Một vài người sẽ phải ở lại sau giờ đóng cửa để tham gia cuộc họp. Tôi đã hủy cuộc họp ban đầu và gửi lời xin lỗi vì sự bất tiện này.<br><br>Bạn có thể sắp xếp thời gian để xem lại vấn đề này cùng với Martina không? Đây là một nhiệm vụ mà cô ấy sẽ thực hiện thường xuyên. Đáng lẽ tôi nên để bạn làm việc cùng cô ấy trước khi yêu cầu cô ấy thiết lập cuộc hẹn."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 10
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: [
      "<b>To:</b> hhollander@helensplace.com<br><b>From:</b> customerservice@eaterysource.com<br><b>Date:</b> January 16<br><b>Subject:</b> Order confirmation<br><br>Dear Ms. Hollander:<br><br>Thank you for shopping with us! This e-mail confirms that we have received your order from eaterysource.com. We are proud to be an international supplier of equipment to restaurants worldwide.<br><br>Your order is currently being processed. Orders are typically processed and sent out to our warehouses within two business days. Our staff will then begin to prepare your order for shipping. You will receive another e-mail once your order has shipped, updating you with its current tracking information.<br><br>Thank you for your business.<br><br>Regards,<br><br>The Eatery Source Team<br>Order Number: #19998056<br>Order Date: January 16"
    ],
    questions: [
      { 
        text: "For what type of business does Ms. Hollander most likely work?", 
        options: { A: "A restaurant", B: "A supermarket", C: "A food supplier", D: "A shipping company" }, 
        correct: "A", 
        explanation: {
          dan_chung: "We are proud to be an international supplier of equipment to restaurants worldwide.",
          ham_y: "Do người bán là nhà cung cấp thiết bị chuyên dụng cho nhà hàng, nên có thể suy luận rằng khách hàng mua sắm thiết bị này đang làm việc cho một nhà hàng.<br>↳ <i>'supplier of equipment to restaurants'</i> (nhà cung cấp thiết bị nhà hàng) + Mua thiết bị = <i>'works for a restaurant'</i> (làm việc cho nhà hàng).",
          lien_he: "Các nhà hàng (nhất là chuỗi lớn) thường phải mua sắm thiết bị bếp công nghiệp, bàn ghế số lượng lớn từ các nhà cung cấp chuyên dụng (B2B suppliers) thay vì mua ở siêu thị bán lẻ.",
          tu_vung: [
            { tu: "confirmation", nghia: "sự xác nhận" },
            { tu: "supplier", nghia: "nhà cung cấp" },
            { tu: "process", nghia: "xử lý" },
            { tu: "warehouse", nghia: "nhà kho" },
            { tu: "tracking information", nghia: "thông tin theo dõi (đơn hàng)" }
          ],
          dich_bai: "<b>Kính gửi bà Hollander,</b><br><br>Cảm ơn bà đã mua sắm với chúng tôi! Email này nhằm xác nhận rằng chúng tôi đã nhận được đơn đặt hàng của bà từ eaterysource.com. Chúng tôi tự hào là nhà cung cấp thiết bị quốc tế cho các nhà hàng trên toàn thế giới.<br><br>Đơn hàng của bà hiện đang được xử lý. Các đơn hàng thường được xử lý và gửi đến kho của chúng tôi trong vòng hai ngày làm việc. Nhân viên của chúng tôi sau đó sẽ bắt đầu chuẩn bị đơn hàng của bà để vận chuyển. Bà sẽ nhận được một email khác khi đơn hàng của bà đã được gửi đi, cập nhật cho bà thông tin theo dõi hiện tại."
        }
      },
      { 
        text: "According to the e-mail, when will Ms. Hollander receive another e-mail from Eatery Source?", 
        options: { A: "When she makes a payment", B: "When she places another order", C: "When new products become available", D: "When her order has left the warehouse" }, 
        correct: "D", 
        explanation: {
          dan_chung: "You will receive another e-mail once your order has shipped...",
          ham_y: "Khách hàng sẽ nhận được thông báo cập nhật qua email ngay khi đơn hàng được gửi đi, tức là lúc hàng hóa xuất phát rời khỏi kho.<br>↳ <i>'once your order has shipped'</i> (khi đơn hàng đã được giao đi) = <i>'When her order has left the warehouse'</i> (Khi đơn hàng rời khỏi kho).",
          lien_he: "Trong quy trình thương mại điện tử, khách hàng thường nhận được email ở 2 giai đoạn chính: 1. Order Confirmation (Xác nhận đã nhận đơn hàng và đang xử lý) và 2. Shipping Confirmation (Thông báo hàng đã rời kho, kèm theo mã vận đơn - tracking number - để theo dõi).",
          tu_vung: [
            { tu: "confirmation", nghia: "sự xác nhận" },
            { tu: "supplier", nghia: "nhà cung cấp" },
            { tu: "process", nghia: "xử lý" },
            { tu: "warehouse", nghia: "nhà kho" },
            { tu: "tracking information", nghia: "thông tin theo dõi (đơn hàng)" }
          ],
          dich_bai: "<b>Kính gửi bà Hollander,</b><br><br>Cảm ơn bà đã mua sắm với chúng tôi! Email này nhằm xác nhận rằng chúng tôi đã nhận được đơn đặt hàng của bà từ eaterysource.com. Chúng tôi tự hào là nhà cung cấp thiết bị quốc tế cho các nhà hàng trên toàn thế giới.<br><br>Đơn hàng của bà hiện đang được xử lý. Các đơn hàng thường được xử lý và gửi đến kho của chúng tôi trong vòng hai ngày làm việc. Nhân viên của chúng tôi sau đó sẽ bắt đầu chuẩn bị đơn hàng của bà để vận chuyển. Bà sẽ nhận được một email khác khi đơn hàng của bà đã được gửi đi, cập nhật cho bà thông tin theo dõi hiện tại."
        }
      }
    ]
  }, // <--- Dấu phẩy kết nối
// ==========================================
  // BÀI 11 (Toshi Auto Group)
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: [
      "<b>To:</b> Wenbin Peng &lt;wpeng@chenconstruction.com&gt;<br><b>From:</b> Toshi Auto Group &lt;cs@toshiautogroup.com&gt;<br><b>Date:</b> February 26<br><b>Subject:</b> Your leased vehicle<br><br>Dear Mr. Peng:<br><br>As you know, Toshi Auto Group handles all the service needs for cars leased by employees of Chen Construction. According to our records, you took possession of your leased car on March 1 of last year. Your car is now due for its required annual service and maintenance check. To book your appointment, please call us at (215) 555-0109 or visit us online at www.toshiautogroup.com/serviceappointments.<br><br>Sincerely,<br><br>Toshi Auto Group Customer Service"
    ],
    questions: [
      { 
        text: "What is the purpose of the e-mail?", 
        options: { A: "To inquire about leasing a vehicle.", B: "To inform a customer of required car maintenance.", C: "To announce the release of a new car.", D: "To register a used car for an extended warranty." }, 
        correct: "B", 
        explanation: {
          dan_chung: "Your car is now due for its required annual service and maintenance check.",
          ham_y: "Khách hàng được thông báo rằng chiếc xe của họ đã đến kỳ hạn bảo dưỡng bắt buộc hàng năm.<br>↳ <i>'due for its required annual service and maintenance check'</i> (đến hạn kiểm tra bảo dưỡng và dịch vụ thường niên) = <i>'inform a customer of required car maintenance'</i> (thông báo cho khách hàng về việc bảo dưỡng xe bắt buộc).",
          lien_he: "Trong các hợp đồng cho thuê xe (Car leasing), khách hàng thường bị bắt buộc phải mang xe đi bảo dưỡng định kỳ tại các garage chỉ định để đảm bảo tài sản (chiếc xe) luôn ở trạng thái tốt nhất.",
          tu_vung: [
            { tu: "lease", nghia: "thuê (xe, nhà, đất)" },
            { tu: "take possession of", nghia: "nhận quyền sở hữu/sử dụng" },
            { tu: "due for", nghia: "đến hạn cho việc gì đó" },
            { tu: "maintenance", nghia: "sự bảo trì, bảo dưỡng" }
          ],
          dich_bai: "<b>Kính gửi ông Peng:</b><br><br>Như ông đã biết, Toshi Auto Group xử lý mọi nhu cầu dịch vụ cho các xe ô tô được thuê bởi nhân viên của Chen Construction. Theo hồ sơ của chúng tôi, ông đã nhận chiếc xe thuê của mình vào ngày 1 tháng 3 năm ngoái. Chiếc xe của ông hiện đã đến hạn kiểm tra bảo dưỡng và dịch vụ thường niên bắt buộc. Để đặt lịch hẹn, vui lòng gọi cho chúng tôi theo số (215) 555-0109 hoặc truy cập trực tuyến vào www.toshiautogroup.com/serviceappointments."
        }
      },
      { 
        text: "What is indicated about Chen Construction?", 
        options: { A: "It performs the servicing of its company vehicles.", B: "It has a new project beginning March 1.", C: "It provides leased cars to some employees.", D: "It will soon begin a construction project for Toshi Auto Group." }, 
        correct: "C", 
        explanation: {
          dan_chung: "cars leased by employees of Chen Construction",
          ham_y: "Công ty này có chính sách hỗ trợ hoặc cung cấp xe thuê cho nhân viên của mình sử dụng.<br>↳ <i>'cars leased by employees of Chen Construction'</i> (những chiếc xe được thuê bởi nhân viên của Chen Construction) = <i>'It provides leased cars to some employees'</i> (Công ty cung cấp xe thuê cho một số nhân viên).",
          lien_he: "Nhiều tập đoàn lớn thường cung cấp xe công ty (company cars) hoặc hỗ trợ chi phí thuê xe cho các vị trí quản lý hoặc nhân viên kinh doanh phải đi lại nhiều.",
          tu_vung: [
            { tu: "lease", nghia: "thuê (xe, nhà, đất)" },
            { tu: "take possession of", nghia: "nhận quyền sở hữu/sử dụng" },
            { tu: "due for", nghia: "đến hạn cho việc gì đó" },
            { tu: "maintenance", nghia: "sự bảo trì, bảo dưỡng" }
          ],
          dich_bai: "<b>Kính gửi ông Peng:</b><br><br>Như ông đã biết, Toshi Auto Group xử lý mọi nhu cầu dịch vụ cho các xe ô tô được thuê bởi nhân viên của Chen Construction. Theo hồ sơ của chúng tôi, ông đã nhận chiếc xe thuê của mình vào ngày 1 tháng 3 năm ngoái. Chiếc xe của ông hiện đã đến hạn kiểm tra bảo dưỡng và dịch vụ thường niên bắt buộc. Để đặt lịch hẹn, vui lòng gọi cho chúng tôi theo số (215) 555-0109 hoặc truy cập trực tuyến vào www.toshiautogroup.com/serviceappointments."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 12 (Job Application - Maria McFarland)
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: [
      "<b>To:</b> amal.abboud@buniifoundation.org<br><b>From:</b> maria_mcfarland@myemail.com<br><b>Date:</b> Thursday, August 22<br><b>Subject:</b> Project Coordinator Position<br><b>Attachment:</b> resume_m_mcfarland.pdf<br><br>Dear Mr. Abboud,<br><br>My friend Josiah Wilkins told me that you are seeking a project coordinator for your company. I have a degree in business administration and am attaching my résumé as I think I am an excellent fit for your needs... Furthermore, my organizational skills enable me to coordinate multiple activities simultaneously, and I can convey expectations clearly to team members involved in each phase of a project.<br><br>... While I enjoy the kind of work I do, it has become clear to me that I need motivation from a strong mission. The goal of your company to create sustainable housing projects is something that I strongly support..."
    ],
    questions: [
      { 
        text: "What does Ms. McFarland mention about Mr. Wilkins?", 
        options: { A: "He informed her of a job opening.", B: "He will require a professional reference.", C: "He would make a good business partner.", D: "He is considering resigning from his position." }, 
        correct: "A", 
        explanation: {
          dan_chung: "My friend Josiah Wilkins told me that you are seeking a project coordinator...",
          ham_y: "Người bạn của cô ấy đã chia sẻ thông tin rằng công ty đang có nhu cầu tuyển dụng một vị trí mới.<br>↳ <i>'told me that you are seeking a project coordinator'</i> (bảo tôi rằng bạn đang tìm một điều phối viên) = <i>'informed her of a job opening'</i> (thông báo cho cô ấy về một vị trí tuyển dụng).",
          lien_he: "Được bạn bè hoặc người quen giới thiệu (Referral) là một trong những nguồn tuyển dụng hiệu quả nhất. Việc nhắc tên người giới thiệu ngay đầu thư xin việc giúp tạo sự tin tưởng (Trust) với nhà tuyển dụng.",
          tu_vung: [
            { tu: "coordinator", nghia: "người điều phối" },
            { tu: "resume", nghia: "sơ yếu lý lịch (CV)" },
            { tu: "simultaneously", nghia: "đồng thời, cùng lúc" },
            { tu: "convey", nghia: "truyền đạt, giao tiếp" },
            { tu: "sustainable", nghia: "bền vững" }
          ],
          dich_bai: "<b>Kính gửi ông Abboud,</b><br><br>Bạn của tôi, Josiah Wilkins, đã nói với tôi rằng ông đang tìm kiếm một điều phối viên dự án cho công ty của mình. Tôi có bằng quản trị kinh doanh và xin đính kèm sơ yếu lý lịch vì tôi nghĩ mình rất phù hợp với nhu cầu của ông... Hơn nữa, kỹ năng tổ chức cho phép tôi điều phối nhiều hoạt động cùng lúc và tôi có thể truyền đạt các kỳ vọng một cách rõ ràng cho các thành viên trong nhóm tham gia vào từng giai đoạn của dự án.<br><br>... Mặc dù tôi thích công việc hiện tại của mình, nhưng tôi nhận ra rằng mình cần động lực từ một sứ mệnh mạnh mẽ. Mục tiêu tạo ra các dự án nhà ở bền vững của công ty ông là điều mà tôi vô cùng ủng hộ..."
        }
      },
      { 
        text: "The word 'convey' in paragraph 1, line 5, is closest in meaning to", 
        options: { A: "transport", B: "communicate", C: "recommend", D: "adapt" }, 
        correct: "B", 
        explanation: {
          dan_chung: "I can convey expectations clearly to team members...",
          ham_y: "Trong ngữ cảnh này, 'truyền đạt' các mong đợi/kỳ vọng đến các thành viên trong nhóm mang ý nghĩa là 'giao tiếp'.<br>↳ <i>'convey'</i> (truyền đạt) = <i>'communicate'</i> (giao tiếp, truyền tải).",
          lien_he: "Kỹ năng giao tiếp (Communication skills) luôn là yếu tố cốt lõi của một Điều phối viên (Coordinator), bởi họ phải làm việc với rất nhiều phòng ban và đảm bảo mọi người hiểu đúng mục tiêu chung.",
          tu_vung: [
            { tu: "coordinator", nghia: "người điều phối" },
            { tu: "resume", nghia: "sơ yếu lý lịch (CV)" },
            { tu: "simultaneously", nghia: "đồng thời, cùng lúc" },
            { tu: "convey", nghia: "truyền đạt, giao tiếp" },
            { tu: "sustainable", nghia: "bền vững" }
          ],
          dich_bai: "<b>Kính gửi ông Abboud,</b><br><br>Bạn của tôi, Josiah Wilkins, đã nói với tôi rằng ông đang tìm kiếm một điều phối viên dự án cho công ty của mình. Tôi có bằng quản trị kinh doanh và xin đính kèm sơ yếu lý lịch vì tôi nghĩ mình rất phù hợp với nhu cầu của ông... Hơn nữa, kỹ năng tổ chức cho phép tôi điều phối nhiều hoạt động cùng lúc và tôi có thể truyền đạt các kỳ vọng một cách rõ ràng cho các thành viên trong nhóm tham gia vào từng giai đoạn của dự án.<br><br>... Mặc dù tôi thích công việc hiện tại của mình, nhưng tôi nhận ra rằng mình cần động lực từ một sứ mệnh mạnh mẽ. Mục tiêu tạo ra các dự án nhà ở bền vững của công ty ông là điều mà tôi vô cùng ủng hộ..."
        }
      },
      { 
        text: "Why does Ms. McFarland want to leave her current position?", 
        options: { A: "She wants a higher salary for her efforts.", B: "She wants to work with a more experienced team.", C: "She wants more opportunities for advancement.", D: "She wants a role that inspires her more." }, 
        correct: "D", 
        explanation: {
          dan_chung: "I need motivation from a strong mission. The goal of your company to create sustainable housing projects is something that I strongly support...",
          ham_y: "Cô ấy muốn tìm kiếm một công việc mang lại cho cô ấy động lực và cảm hứng thông qua những sứ mệnh ý nghĩa.<br>↳ <i>'need motivation from a strong mission'</i> (cần động lực từ một sứ mệnh mạnh mẽ) = <i>'wants a role that inspires her more'</i> (muốn một vai trò truyền cảm hứng cho cô ấy nhiều hơn).",
          lien_he: "Trong các bài đọc TOEIC, ứng viên chuyển việc thường vì hai lý do chính: 1. Tìm kiếm cơ hội thăng tiến/lương cao hơn (Advancement/Compensation) hoặc 2. Tìm kiếm sứ mệnh công ty phù hợp với giá trị cá nhân (Company Culture/Mission).",
          tu_vung: [
            { tu: "coordinator", nghia: "người điều phối" },
            { tu: "resume", nghia: "sơ yếu lý lịch (CV)" },
            { tu: "simultaneously", nghia: "đồng thời, cùng lúc" },
            { tu: "convey", nghia: "truyền đạt, giao tiếp" },
            { tu: "sustainable", nghia: "bền vững" }
          ],
          dich_bai: "<b>Kính gửi ông Abboud,</b><br><br>Bạn của tôi, Josiah Wilkins, đã nói với tôi rằng ông đang tìm kiếm một điều phối viên dự án cho công ty của mình. Tôi có bằng quản trị kinh doanh và xin đính kèm sơ yếu lý lịch vì tôi nghĩ mình rất phù hợp với nhu cầu của ông... Hơn nữa, kỹ năng tổ chức cho phép tôi điều phối nhiều hoạt động cùng lúc và tôi có thể truyền đạt các kỳ vọng một cách rõ ràng cho các thành viên trong nhóm tham gia vào từng giai đoạn của dự án.<br><br>... Mặc dù tôi thích công việc hiện tại của mình, nhưng tôi nhận ra rằng mình cần động lực từ một sứ mệnh mạnh mẽ. Mục tiêu tạo ra các dự án nhà ở bền vững của công ty ông là điều mà tôi vô cùng ủng hộ..."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 13 (Red Street Dental Care)
  // ==========================================
  {
    category: "A. E-MAIL - LETTER",
    type: "Single Passage",
    texts: [
      "Pierre Gitane<br>26 Bear Tree Lane<br>Charlote, NC 28804<br>April 15<br><br>Dear Mr. Gitane,<br><br>This letter is to inform you that you are due for your semiannual dental care visit. Go to our Web site and fill out a form to request an appointment...<br><br>We are happy to announce that we now offer teeth whitening and invisible braces to improve your smile. Please let us know if you are interested in one or both of these services.<br><br>All best,<br>Sarah Hamadi<br>Office manager, Red Street Dental Care"
    ],
    questions: [
      { 
        text: "Why did Mr. Gitane receive the letter?", 
        options: { A: "He just got a new dentist.", B: "It is time for a routine checkup.", C: "Red Street Dental Care is requesting his feedback.", D: "He was dissatisfied with his last visit." }, 
        correct: "B", 
        explanation: {
          dan_chung: "you are due for your semiannual dental care visit.",
          ham_y: "Đã đến lúc bệnh nhân cần thực hiện buổi kiểm tra sức khỏe răng miệng định kỳ theo lịch trình.<br>↳ <i>'due for your semiannual dental care visit'</i> (đến hạn khám nha khoa mỗi nửa năm) = <i>'time for a routine checkup'</i> (đã đến lúc kiểm tra sức khỏe định kỳ).",
          lien_he: "Các phòng khám nha khoa (Dental clinics) thường dùng hệ thống CRM để tự động gửi thư/email nhắc nhở khách hàng quay lại khám định kỳ (routine checkup) - thường là mỗi 6 tháng (semiannually) để cạo vôi răng.",
          tu_vung: [
            { tu: "semiannual", nghia: "nửa năm một lần (6 tháng/lần)" },
            { tu: "appointment", nghia: "cuộc hẹn" },
            { tu: "teeth whitening", nghia: "làm trắng răng" },
            { tu: "invisible braces", nghia: "niềng răng trong suốt" }
          ],
          dich_bai: "<b>Kính gửi ông Gitane,</b><br><br>Bức thư này nhằm thông báo rằng ông đã đến hạn khám nha khoa định kỳ nửa năm một lần. Hãy truy cập trang web của chúng tôi và điền vào biểu mẫu để yêu cầu đặt lịch hẹn...<br><br>Chúng tôi vui mừng thông báo rằng hiện nay chúng tôi đã cung cấp dịch vụ làm trắng răng và niềng răng trong suốt để nụ cười của ông thêm hoàn thiện. Vui lòng cho chúng tôi biết nếu ông quan tâm đến một hoặc cả hai dịch vụ này."
        }
      },
      { 
        text: "What does the letter state about the teeth-whitening service?", 
        options: { A: "It costs about the same as invisible braces.", B: "It was not available at Red Street Dental Care until recently.", C: "It takes up to six months to obtain the desired results.", D: "It is not covered by dental insurance plans." }, 
        correct: "B", 
        explanation: {
          dan_chung: "we are happy to announce that we now offer teeth whitening...",
          ham_y: "Việc phòng khám 'bây giờ mới cung cấp' dịch vụ này chứng tỏ trước đây nó chưa từng có sẵn.<br>↳ <i>'we now offer teeth whitening'</i> (hiện nay chúng tôi đã cung cấp) = <i>'was not available... until recently'</i> (không có sẵn cho đến tận gần đây).",
          lien_he: "Đây là kỹ thuật suy luận (Inference) rất đặc trưng trong TOEIC: Nếu một doanh nghiệp thông báo 'chúng tôi NAY ĐÃ CÓ...' (We NOW offer), thì có nghĩa là trước đó họ KHÔNG CÓ (Not available previously).",
          tu_vung: [
            { tu: "semiannual", nghia: "nửa năm một lần (6 tháng/lần)" },
            { tu: "appointment", nghia: "cuộc hẹn" },
            { tu: "teeth whitening", nghia: "làm trắng răng" },
            { tu: "invisible braces", nghia: "niềng răng trong suốt" }
          ],
          dich_bai: "<b>Kính gửi ông Gitane,</b><br><br>Bức thư này nhằm thông báo rằng ông đã đến hạn khám nha khoa định kỳ nửa năm một lần. Hãy truy cập trang web của chúng tôi và điền vào biểu mẫu để yêu cầu đặt lịch hẹn...<br><br>Chúng tôi vui mừng thông báo rằng hiện nay chúng tôi đã cung cấp dịch vụ làm trắng răng và niềng răng trong suốt để nụ cười của ông thêm hoàn thiện. Vui lòng cho chúng tôi biết nếu ông quan tâm đến một hoặc cả hai dịch vụ này."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 14 (Harrod Automotive Manufacturing)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Harrod Automotive Manufacturing</b><br>Andrew Dunn, Director<br>Laura Bradley, Site Manager<br><br>Welcome to Harrod Automotive Manufacturing! We are serious about maintaining a safe workplace environment. We ask that the following rules be strictly observed while you are touring the assembly floor. Anyone found in violation of these rules will be asked to leave the premises. For concerns about compliance, please contact the site manager.<br><br>ALWAYS:<br>➣ Stay with your tour guide.<br>➣ Wear safety glasses and helmet.<br>➣ Respond to alarm signals and obey evacuation instructions.<br>➣ Request permission from your guide before taking photographs."
    ],
    questions: [
      { 
        text: "For whom is the notice most likely intended?", 
        options: { A: "Maintenance workers", B: "Security guards", C: "Safety inspectors", D: "Factory visitors" }, 
        correct: "D", 
        explanation: {
          dan_chung: "while you are touring the assembly floor... ALWAYS: Stay with your tour guide.",
          ham_y: "Bảng nội quy này được viết dành riêng cho những người đang được hướng dẫn đi tham quan nhà máy.<br>↳ <i>'touring the assembly floor'</i> (đi tham quan xưởng lắp ráp) + <i>'tour guide'</i> (hướng dẫn viên) = <i>'Factory visitors'</i> (những người đến thăm nhà máy).",
          lien_he: "Các nhà máy công nghiệp nặng thường tổ chức các chuyến tham quan (Factory Tour) cho đối tác, nhà đầu tư hoặc sinh viên. Khách tham quan phải luôn đi cùng Hướng dẫn viên (Tour guide) và mặc đồ bảo hộ.",
          tu_vung: [
            { tu: "strictly observed", nghia: "được tuân thủ một cách nghiêm ngặt" },
            { tu: "assembly floor", nghia: "khu vực/xưởng lắp ráp" },
            { tu: "violation", nghia: "sự vi phạm" },
            { tu: "premises", nghia: "khuôn viên, cơ sở" },
            { tu: "compliance", nghia: "sự tuân thủ" }
          ],
          dich_bai: "<b>Chào mừng đến với Nhà máy Sản xuất Ô tô Harrod!</b><br><br>Chúng tôi rất nghiêm túc trong việc duy trì một môi trường làm việc an toàn. Chúng tôi yêu cầu các quy định sau đây phải được tuân thủ nghiêm ngặt trong khi quý vị đi tham quan khu vực lắp ráp. Bất kỳ ai bị phát hiện vi phạm những quy tắc này sẽ bị yêu cầu rời khỏi khuôn viên. Nếu có thắc mắc về việc tuân thủ, vui lòng liên hệ với quản lý khu vực (site manager)."
        }
      },
      { 
        text: "According to the notice, why should someone contact Ms. Bradley?", 
        options: { A: "To praise an employee", B: "To inquire about a policy", C: "To submit photographs", D: "To obtain a schedule" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Laura Bradley, Site Manager... For concerns about compliance, please contact the site manager.",
          ham_y: "Người quản lý (Ms. Bradley) là người phụ trách giải đáp các thắc mắc liên quan đến việc tuân thủ các quy định và chính sách.<br>↳ <i>'concerns about compliance'</i> (những thắc mắc/quan ngại về việc tuân thủ quy định) = <i>'inquire about a policy'</i> (hỏi thông tin về một chính sách).",
          lien_he: "Trong sơ đồ tổ chức TOEIC, Site Manager (Quản lý hiện trường) hoặc Compliance Officer (Nhân viên pháp chế) là người giám sát (oversee) việc mọi người có làm đúng luật (policy/rules) hay không.",
          tu_vung: [
            { tu: "strictly observed", nghia: "được tuân thủ một cách nghiêm ngặt" },
            { tu: "assembly floor", nghia: "khu vực/xưởng lắp ráp" },
            { tu: "violation", nghia: "sự vi phạm" },
            { tu: "premises", nghia: "khuôn viên, cơ sở" },
            { tu: "compliance", nghia: "sự tuân thủ" }
          ],
          dich_bai: "<b>Chào mừng đến với Nhà máy Sản xuất Ô tô Harrod!</b><br><br>Chúng tôi rất nghiêm túc trong việc duy trì một môi trường làm việc an toàn. Chúng tôi yêu cầu các quy định sau đây phải được tuân thủ nghiêm ngặt trong khi quý vị đi tham quan khu vực lắp ráp. Bất kỳ ai bị phát hiện vi phạm những quy tắc này sẽ bị yêu cầu rời khỏi khuôn viên. Nếu có thắc mắc về việc tuân thủ, vui lòng liên hệ với quản lý khu vực (site manager)."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 15 (Star Designs)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>STAR DESIGNS</b><br><br>Dear Customers:<br><br>For many years, we at Star Designs have strived to offer quality apparel at competitive prices. Unfortunately, as a quick glance at our online store shows, we have been forced to increase our prices recently. Every effort has been made to avoid this, but because of the growing costs of cotton and most fabrics that we use to sew our colorful shirts and formal wear, we could no longer afford to maintain our prices."
    ],
    questions: [
      { 
        text: "What does Star Designs produce?", 
        options: { A: "Software", B: "Clothing", C: "Cosmetics", D: "Furniture" }, 
        correct: "B", 
        explanation: {
          dan_chung: "offer quality apparel... sew our colorful shirts and formal wear",
          ham_y: "Công ty chuyên cung cấp các mặt hàng trang phục và tự may áo sơ mi, đồ âu, tức là họ sản xuất quần áo.<br>↳ <i>'apparel'</i> (trang phục) & <i>'sew our colorful shirts'</i> (may áo sơ mi) = <i>'Clothing'</i> (quần áo).",
          lien_he: "Từ vựng 'Apparel', 'Garment', 'Attire' và 'Clothing' là nhóm từ đồng nghĩa vô cùng quan trọng thường xuyên xuất hiện chéo nhau giữa câu hỏi và bài đọc trong TOEIC.",
          tu_vung: [
            { tu: "strive", nghia: "nỗ lực, phấn đấu" },
            { tu: "apparel", nghia: "quần áo, trang phục" },
            { tu: "competitive", nghia: "có tính cạnh tranh" },
            { tu: "fabric", nghia: "vải vóc" },
            { tu: "afford", nghia: "có đủ khả năng (tài chính) để làm gì" }
          ],
          dich_bai: "<b>STAR DESIGNS</b><br><br>Kính gửi quý khách hàng:<br><br>Trong nhiều năm qua, Star Designs chúng tôi luôn nỗ lực cung cấp trang phục chất lượng với giá cả cạnh tranh. Thật không may, như quý vị có thể thấy khi lướt qua cửa hàng trực tuyến của chúng tôi, gần đây chúng tôi đã buộc phải tăng giá. Chúng tôi đã nỗ lực hết sức để tránh điều này, nhưng do chi phí bông và hầu hết các loại vải mà chúng tôi sử dụng để may áo sơ mi sặc sỡ và đồ âu ngày càng tăng, chúng tôi không thể duy trì mức giá cũ được nữa."
        }
      },
      { 
        text: "What is being announced?", 
        options: { A: "A grand opening", B: "An expanded product line", C: "A change in prices", D: "An upgraded online store" }, 
        correct: "C", 
        explanation: {
          dan_chung: "we have been forced to increase our prices recently.",
          ham_y: "Thông báo này được đưa ra để giải thích cho khách hàng về sự thay đổi (cụ thể là tăng lên) của giá bán sản phẩm.<br>↳ <i>'increase our prices'</i> (tăng giá) = <i>'A change in prices'</i> (Một sự thay đổi về giá cả).",
          lien_he: "Khi một doanh nghiệp buộc phải tăng giá (Price increase) do chi phí nguyên vật liệu đầu vào (materials) hoặc lạm phát, họ thường gửi thư xin lỗi khách hàng và giải thích rõ lý do để giữ chân khách.",
          tu_vung: [
            { tu: "strive", nghia: "nỗ lực, phấn đấu" },
            { tu: "apparel", nghia: "quần áo, trang phục" },
            { tu: "competitive", nghia: "có tính cạnh tranh" },
            { tu: "fabric", nghia: "vải vóc" },
            { tu: "afford", nghia: "có đủ khả năng (tài chính) để làm gì" }
          ],
          dich_bai: "<b>STAR DESIGNS</b><br><br>Kính gửi quý khách hàng:<br><br>Trong nhiều năm qua, Star Designs chúng tôi luôn nỗ lực cung cấp trang phục chất lượng với giá cả cạnh tranh. Thật không may, như quý vị có thể thấy khi lướt qua cửa hàng trực tuyến của chúng tôi, gần đây chúng tôi đã buộc phải tăng giá. Chúng tôi đã nỗ lực hết sức để tránh điều này, nhưng do chi phí bông và hầu hết các loại vải mà chúng tôi sử dụng để may áo sơ mi sặc sỡ và đồ âu ngày càng tăng, chúng tôi không thể duy trì mức giá cũ được nữa."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 16 (Sales Lunch Workshop)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Sales Lunch Workshop</b><br><br>Attention sales associates! Are you new to CMG Direct Retail? Is your sales sheet looking a little short? Do you want to increase your commissions but can't seem to find new clients? Come to this month's lunch workshop, where Senior Sales Manager Chad Avakian will share his secrets for locating, securing, and expanding new accounts! Lunch is not provided, so be sure to pack something for yourself. After the meeting, a digital recording of the full presentation will be made available on the company's training Web site, so there's no need to bring a laptop for notes."
    ],
    questions: [
      { 
        text: "What are attendees advised to bring to the meeting?", 
        options: { A: "Some food", B: "Sales sheets", C: "Registration forms", D: "A laptop computer" }, 
        correct: "A", 
        explanation: {
          dan_chung: "Lunch is not provided, so be sure to pack something for yourself.",
          ham_y: "Ban tổ chức yêu cầu người tham gia tự chuẩn bị một chút đồ ăn trưa vì họ sẽ không cung cấp sẵn bữa ăn.<br>↳ <i>'pack something for yourself'</i> (tự gói ghém đồ mang theo) = <i>'bring some food'</i> (mang theo chút đồ ăn).",
          lien_he: "Thuật ngữ 'Lunch Workshop' hoặc 'Brown Bag Session' dùng để chỉ những buổi đào tạo diễn ra ngay trong giờ nghỉ trưa. Tại đây, công ty cung cấp kiến thức, còn nhân viên thường tự mang đồ ăn từ nhà (brown bag) để vừa ăn vừa nghe.",
          tu_vung: [
            { tu: "commission", nghia: "tiền hoa hồng" },
            { tu: "secure", nghia: "đảm bảo, giành được" },
            { tu: "pack", nghia: "đóng gói, mang theo" }
          ],
          dich_bai: "<b>Hội thảo Ăn trưa Dành cho Bộ phận Bán hàng</b><br><br>Chú ý các nhân viên bán hàng! Bạn có phải là người mới tại CMG Direct Retail không? Danh sách khách hàng của bạn có vẻ hơi ngắn? Bạn muốn tăng hoa hồng nhưng dường như không thể tìm được khách hàng mới? Hãy đến với buổi hội thảo ăn trưa tháng này, nơi Quản lý Bán hàng Cấp cao Chad Avakian sẽ chia sẻ bí quyết tìm kiếm, bảo đảm và mở rộng các tài khoản mới! Bữa trưa sẽ không được cung cấp, vì vậy hãy chắc chắn tự mang theo đồ ăn cho mình. Sau cuộc họp, bản ghi hình kỹ thuật số của toàn bộ bài thuyết trình sẽ có trên trang web đào tạo của công ty, vì vậy không cần mang theo máy tính xách tay để ghi chép."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 17 (Bus Line 75)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Attention Line 75 Riders</b><br><br>All Metrowestern passengers should be aware of the following temporary changes for bus line 75. Due to construction, service on Eighth Avenue between Taylor Street and Forbes Boulevard will be suspended during the following periods. We apologize for any inconvenience.<br><br>Monday, April 5, 10:00 A.M.-4:00 P.M.<br>Wednesday, April 7, 11:00 A.M.-4:30 P.M.<br>Friday, April 9, 6:30 P.M.-10:00 P.M.<br>Saturday, April 10, 9:00 A.M.-5:00 P.M.<br><br>As usual, all Metrowestern bus service ends at 11:30 P.M. All buses begin running again at 5:45 A.M. daily."
    ],
    questions: [
      { 
        text: "What is the purpose of the notice?", 
        options: { A: "To introduce a new express bus route", B: "To announce temporary changes in bus service", C: "To report on the completion of a construction project", D: "To request that riders avoid travel during peak hours" }, 
        correct: "B", 
        explanation: {
          dan_chung: "All Metrowestern passengers should be aware of the following temporary changes for bus line 75.",
          ham_y: "Mục đích của thông báo này là để cảnh báo hành khách về việc thay đổi lịch trình hoặc tạm dừng hoạt động của xe buýt.<br>↳ <i>'temporary changes for bus line 75'</i> (thay đổi tạm thời tuyến xe số 75) = <i>'announce temporary changes in bus service'</i> (thông báo thay đổi tạm thời dịch vụ xe buýt).",
          lien_he: "Các phương tiện giao thông công cộng (Public Transit) thường phải đăng thông báo (Notice/Alert) dán ở trạm dừng hoặc trên ứng dụng khi có sự cố đào đường (construction) khiến xe phải đi đường vòng (detour) hoặc tạm dừng (suspend).",
          tu_vung: [
            { tu: "passenger", nghia: "hành khách" },
            { tu: "temporary", nghia: "tạm thời" },
            { tu: "suspend", nghia: "đình chỉ, tạm dừng" },
            { tu: "inconvenience", nghia: "sự bất tiện" }
          ],
          dich_bai: "<b>Chú ý hành khách tuyến xe buýt 75</b><br><br>Tất cả hành khách của Metrowestern cần lưu ý những thay đổi tạm thời sau đây đối với tuyến xe buýt 75. Do công trình xây dựng, dịch vụ trên Đại lộ số 8 giữa đường Taylor và Đại lộ Forbes sẽ bị đình chỉ trong các khoảng thời gian sau. Chúng tôi xin lỗi vì sự bất tiện này.<br><br>Thứ Hai, ngày 5 tháng 4, 10:00 Sáng - 4:00 Chiều<br>Thứ Tư, ngày 7 tháng 4, 11:00 Sáng - 4:30 Chiều<br>Thứ Sáu, ngày 9 tháng 4, 6:30 Tối - 10:00 Tối<br>Thứ Bảy, ngày 10 tháng 4, 9:00 Sáng - 5:00 Chiều<br><br>Như thường lệ, tất cả dịch vụ xe buýt Metrowestern kết thúc vào lúc 11:30 Tối. Tất cả các xe buýt bắt đầu chạy lại vào lúc 5:45 Sáng hằng ngày."
        }
      },
      { 
        text: "According to the notice, when will the bus route be available?", 
        options: { A: "on April 5 at 11:30 A.M.", B: "on April 7 at 5:30 A.M.", C: "on April 9 at 3:00 P.M.", D: "on April 10 at 4:00 P.M." }, 
        correct: "C", 
        explanation: {
          dan_chung: "Friday, April 9, 6:30 P.M.-10:00 P.M. (suspended period)",
          ham_y: "Vào ngày 9/4, xe buýt chỉ bị tạm dừng vào buổi tối. Do đó, vào lúc 3 giờ chiều ngày hôm đó, xe buýt vẫn hoạt động bình thường.<br>↳ <i>'suspended... 6:30 P.M.-10:00 P.M.'</i> (bị đình chỉ từ 6h30 - 10h tối) => <i>'available... at 3:00 P.M.'</i> (có sẵn lúc 3 giờ chiều).",
          lien_he: "Đây là dạng câu hỏi CHÚ Ý CHI TIẾT KẾT HỢP SUY LUẬN. Đề bài liệt kê giờ 'ĐÓNG CỬA', nhưng câu hỏi lại hỏi giờ 'MỞ CỬA'. Bạn phải dùng phương pháp loại trừ xem mốc thời gian nào KHÔNG nằm trong khoảng bị cấm.",
          tu_vung: [
            { tu: "passenger", nghia: "hành khách" },
            { tu: "temporary", nghia: "tạm thời" },
            { tu: "suspend", nghia: "đình chỉ, tạm dừng" },
            { tu: "inconvenience", nghia: "sự bất tiện" }
          ],
          dich_bai: "<b>Chú ý hành khách tuyến xe buýt 75</b><br><br>Tất cả hành khách của Metrowestern cần lưu ý những thay đổi tạm thời sau đây đối với tuyến xe buýt 75. Do công trình xây dựng, dịch vụ trên Đại lộ số 8 giữa đường Taylor và Đại lộ Forbes sẽ bị đình chỉ trong các khoảng thời gian sau. Chúng tôi xin lỗi vì sự bất tiện này.<br><br>Thứ Hai, ngày 5 tháng 4, 10:00 Sáng - 4:00 Chiều<br>Thứ Tư, ngày 7 tháng 4, 11:00 Sáng - 4:30 Chiều<br>Thứ Sáu, ngày 9 tháng 4, 6:30 Tối - 10:00 Tối<br>Thứ Bảy, ngày 10 tháng 4, 9:00 Sáng - 5:00 Chiều<br><br>Như thường lệ, tất cả dịch vụ xe buýt Metrowestern kết thúc vào lúc 11:30 Tối. Tất cả các xe buýt bắt đầu chạy lại vào lúc 5:45 Sáng hằng ngày."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 18 (Sunlight Sugar)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>To:</b> Processing Plant Managers<br><b>From:</b> Sunlight Sugar Executive Board<br><b>Date:</b> June 15<br><b>Subject:</b> News<br><br>We are pleased to announce that, following our strongest quarter in over three years, we were ranked as the number-two sugar distributor in the region in the June 1 edition of <i>Sugar Industry Times</i>...<br><br>To celebrate this achievement, we would like to recognize employees with a bonus to be added to their July 15 paycheck. Plant managers at each location should inform staff at the next plant meeting on July 1."
    ],
    questions: [
      { 
        text: "What is indicated about Sunlight Sugar?", 
        options: { A: "It is changing the payday schedule.", B: "It publishes the Sugar Industry Times.", C: "It was established more than three years ago.", D: "It was previously the number-one distributor." }, 
        correct: "C", 
        explanation: {
          dan_chung: "following our strongest quarter in over three years",
          ham_y: "Do công ty đang so sánh doanh thu của hiện tại với dữ liệu của hơn 3 năm qua, điều này chứng tỏ công ty đã hoạt động ít nhất là hơn 3 năm.<br>↳ <i>'strongest quarter in over three years'</i> (quý mạnh nhất trong hơn 3 năm) = <i>'established more than three years ago'</i> (được thành lập hơn 3 năm trước).",
          lien_he: "Kỹ năng Đọc hiểu suy luận logic: Một công ty không thể có 'kỷ lục cao nhất trong 3 năm' nếu nó mới được thành lập năm ngoái. Do đó, 'in over 3 years' ám chỉ tuổi đời doanh nghiệp (established/founded).",
          tu_vung: [
            { tu: "distributor", nghia: "nhà phân phối" },
            { tu: "achievement", nghia: "thành tựu" },
            { tu: "bonus", nghia: "tiền thưởng" },
            { tu: "paycheck", nghia: "phiếu lương, tiền lương" }
          ],
          dich_bai: "<b>Gửi:</b> Các Quản lý Nhà máy Xử lý<br><b>Từ:</b> Ban Giám đốc Sunlight Sugar<br><b>Ngày:</b> 15 tháng 6<br><b>Chủ đề:</b> Tin tức<br><br>Chúng tôi vui mừng thông báo rằng, sau quý hoạt động mạnh mẽ nhất trong hơn ba năm qua, chúng ta đã được xếp hạng là nhà phân phối đường số hai trong khu vực trên ấn bản ngày 1 tháng 6 của tạp chí <i>Thời báo Công nghiệp Đường</i>...<br><br>Để ăn mừng thành tựu này, chúng tôi muốn tri ân nhân viên bằng một khoản tiền thưởng sẽ được cộng vào phiếu lương ngày 15 tháng 7. Các quản lý nhà máy tại mỗi địa điểm nên thông báo cho nhân viên tại cuộc họp nhà máy tiếp theo vào ngày 1 tháng 7."
        }
      },
      { 
        text: "When will plant managers announce an employee bonus?", 
        options: { A: "On June 1", B: "On June 15", C: "On July 1", D: "On July 15" }, 
        correct: "C", 
        explanation: {
          dan_chung: "Plant managers at each location should inform staff at the next plant meeting on July 1.",
          ham_y: "Người quản lý sẽ thực hiện việc thông báo tin tức về khoản thưởng này cho nhân viên vào buổi họp ngày 1/7.<br>↳ <i>'inform staff... on July 1'</i> (thông báo cho nhân viên... vào ngày 1/7) = <i>'announce an employee bonus... On July 1'</i> (thông báo về khoản thưởng... Vào ngày 1/7).",
          lien_he: "Trong các văn bản hành chính, thường có nhiều mốc thời gian khác nhau (ngày ra thông báo, ngày họp thông báo, ngày nhận tiền). Bạn cần gạch dưới đúng keywords: 'announce/inform' đi với ngày nào, 'paycheck/receive' đi với ngày nào.",
          tu_vung: [
            { tu: "distributor", nghia: "nhà phân phối" },
            { tu: "achievement", nghia: "thành tựu" },
            { tu: "bonus", nghia: "tiền thưởng" },
            { tu: "paycheck", nghia: "phiếu lương, tiền lương" }
          ],
          dich_bai: "<b>Gửi:</b> Các Quản lý Nhà máy Xử lý<br><b>Từ:</b> Ban Giám đốc Sunlight Sugar<br><b>Ngày:</b> 15 tháng 6<br><b>Chủ đề:</b> Tin tức<br><br>Chúng tôi vui mừng thông báo rằng, sau quý hoạt động mạnh mẽ nhất trong hơn ba năm qua, chúng ta đã được xếp hạng là nhà phân phối đường số hai trong khu vực trên ấn bản ngày 1 tháng 6 của tạp chí <i>Thời báo Công nghiệp Đường</i>...<br><br>Để ăn mừng thành tựu này, chúng tôi muốn tri ân nhân viên bằng một khoản tiền thưởng sẽ được cộng vào phiếu lương ngày 15 tháng 7. Các quản lý nhà máy tại mỗi địa điểm nên thông báo cho nhân viên tại cuộc họp nhà máy tiếp theo vào ngày 1 tháng 7."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 19 (Art Exhibition)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Expressions in Form and Color</b><br>March 30<br>5:30 P.M. - 9:00 P.M.<br><br>The Summerlake University Art Department is pleased to present its annual showcase, opening today at 5:30 P.M. in the campus art gallery located in Building 4. Come see new artwork—including paintings, photographs, drawings, and sculptures—while enjoying beverages and appetizers...<br><br>This event is open to students, faculty, and the public. Parking is available in the designated areas next to Buildings 4 and 8. Please note that the area by Building 4 requires a permit, but the area by Building 8 is free to the public."
    ],
    questions: [
      { 
        text: "What is the purpose of the notice?", 
        options: { A: "To advertise an art class", B: "To promote a yearly exhibition", C: "To publicize the sale of a sculpture", D: "To announce the opening of a museum" }, 
        correct: "B", 
        explanation: {
          dan_chung: "pleased to present its annual showcase",
          ham_y: "Mục đích của thông báo này là nhằm quảng bá cho một buổi triển lãm được tổ chức mỗi năm một lần của trường đại học.<br>↳ <i>'annual showcase'</i> (trưng bày thường niên) = <i>'yearly exhibition'</i> (triển lãm hàng năm).",
          lien_he: "Từ đồng nghĩa cực kỳ quan trọng trong TOEIC: 'Annual' = 'Yearly' = 'Once a year' (Hàng năm). 'Showcase' = 'Exhibition' = 'Display' = 'Fair' (Triển lãm, trưng bày).",
          tu_vung: [
            { tu: "showcase", nghia: "buổi triển lãm, sự trưng bày" },
            { tu: "sculpture", nghia: "tác phẩm điêu khắc" },
            { tu: "beverage", nghia: "đồ uống" },
            { tu: "appetizer", nghia: "món khai vị" },
            { tu: "faculty", nghia: "giảng viên, ban cán sự (trong trường học)" },
            { tu: "permit", nghia: "giấy phép" }
          ],
          dich_bai: "<b>Những biểu hiện về Hình khối và Màu sắc</b><br>Ngày 30 tháng 3<br>5:30 Chiều - 9:00 Tối<br><br>Khoa Nghệ thuật Đại học Summerlake hân hạnh giới thiệu buổi triển lãm thường niên, khai mạc hôm nay lúc 5:30 Chiều tại phòng trưng bày nghệ thuật của khuôn viên nằm ở Tòa nhà số 4. Hãy đến xem các tác phẩm nghệ thuật mới - bao gồm tranh vẽ, nhiếp ảnh, bản phác thảo và tác phẩm điêu khắc - trong khi thưởng thức đồ uống và món khai vị...<br><br>Sự kiện này mở cửa cho sinh viên, giảng viên và công chúng. Có sẵn bãi đậu xe trong các khu vực được chỉ định cạnh Tòa nhà 4 và 8. Vui lòng lưu ý rằng khu vực cạnh Tòa nhà 4 yêu cầu phải có giấy phép, nhưng khu vực cạnh Tòa nhà 8 thì hoàn toàn miễn phí cho công chúng."
        }
      },
      { 
        text: "What is NOT suggested about the event?", 
        options: { A: "Refreshments will be served.", B: "Artists will attend.", C: "Free parking is available.", D: "Demonstrations will be given." }, 
        correct: "D", 
        explanation: {
          dan_chung: "enjoying beverages and appetizers (A) ... free to the public (C)",
          ham_y: "Sự kiện có phục vụ đồ ăn thức uống nhẹ và có bãi đỗ xe miễn phí, nhưng không hề đề cập đến việc sẽ có các màn trình diễn hoặc hướng dẫn thực hành.<br>↳ Sự kiện có <i>'beverages and appetizers'</i> (A. Refreshments), có đỗ xe <i>'free to the public'</i> (C. Free parking), nhưng KHÔNG có <i>'Demonstrations'</i> (Trình diễn).",
          lien_he: "Dạng câu hỏi NOT/TRUE/FALSE đòi hỏi bạn phải đối chiếu và loại trừ từng đáp án một. Từ vựng 'Refreshments' là từ chỉ chung cho cả đồ uống (Beverages) và đồ ăn nhẹ (Appetizers/Snacks).",
          tu_vung: [
            { tu: "showcase", nghia: "buổi triển lãm, sự trưng bày" },
            { tu: "sculpture", nghia: "tác phẩm điêu khắc" },
            { tu: "beverage", nghia: "đồ uống" },
            { tu: "appetizer", nghia: "món khai vị" },
            { tu: "faculty", nghia: "giảng viên, ban cán sự (trong trường học)" },
            { tu: "permit", nghia: "giấy phép" }
          ],
          dich_bai: "<b>Những biểu hiện về Hình khối và Màu sắc</b><br>Ngày 30 tháng 3<br>5:30 Chiều - 9:00 Tối<br><br>Khoa Nghệ thuật Đại học Summerlake hân hạnh giới thiệu buổi triển lãm thường niên, khai mạc hôm nay lúc 5:30 Chiều tại phòng trưng bày nghệ thuật của khuôn viên nằm ở Tòa nhà số 4. Hãy đến xem các tác phẩm nghệ thuật mới - bao gồm tranh vẽ, nhiếp ảnh, bản phác thảo và tác phẩm điêu khắc - trong khi thưởng thức đồ uống và món khai vị...<br><br>Sự kiện này mở cửa cho sinh viên, giảng viên và công chúng. Có sẵn bãi đậu xe trong các khu vực được chỉ định cạnh Tòa nhà 4 và 8. Vui lòng lưu ý rằng khu vực cạnh Tòa nhà 4 yêu cầu phải có giấy phép, nhưng khu vực cạnh Tòa nhà 8 thì hoàn toàn miễn phí cho công chúng."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 20 (South Street Bank)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>To:</b> South Street Bank staff<br><b>From:</b> William Rees-Yates, Chief Executive Officer<br><b>Date:</b> May 12<br><br>I am pleased to announce that our bank is expanding. Thanks to our creative marketing and award-winning customer service, the demand for our services has been growing. — [1] —. We will therefore be opening a branch in Leesburg this year.<br><br>Although the new branch will not be in operation until July 1, it is already virtually ready to open. — [2] —. There remain, however, a couple of job openings to be filled that can be viewed at www.southstreetbank.com/jobs."
    ],
    questions: [
      { 
        text: "What is the memo mainly about?", 
        options: { A: "A merger with another company", B: "The hiring of several new staff", C: "A temporary closing for renovations", D: "The opening of a new branch" }, 
        correct: "D", 
        explanation: {
          dan_chung: "our bank is expanding ... We will therefore be opening a branch in Leesburg this year.",
          ham_y: "Nội dung chính của thông báo là tin tức về việc ngân hàng sắp khai trương thêm một chi nhánh mới tại khu vực Leesburg.<br>↳ <i>'opening a branch in Leesburg'</i> (mở một chi nhánh ở Leesburg) = <i>'opening of a new branch'</i> (việc khai trương chi nhánh mới).",
          lien_he: "Câu hỏi 'mainly about' / 'purpose' luôn nằm ở đoạn đầu tiên hoặc những câu đầu tiên của văn bản. Việc 'mở rộng' (expanding) thường đi liền với 'mở chi nhánh' (opening a branch) hoặc 'xây cơ sở mới' (building a new facility).",
          tu_vung: [
            { tu: "expand", nghia: "mở rộng" },
            { tu: "demand", nghia: "nhu cầu" },
            { tu: "branch", nghia: "chi nhánh" },
            { tu: "in operation", nghia: "đi vào hoạt động" },
            { tu: "job opening", nghia: "vị trí công việc đang tuyển dụng" }
          ],
          dich_bai: "<b>Gửi:</b> Nhân viên ngân hàng South Street<br><b>Từ:</b> William Rees-Yates, Giám đốc Điều hành<br><b>Ngày:</b> 12 tháng 5<br><br>Tôi vui mừng thông báo rằng ngân hàng của chúng ta đang mở rộng. Nhờ chiến dịch tiếp thị sáng tạo và dịch vụ chăm sóc khách hàng đạt giải thưởng, nhu cầu về các dịch vụ của chúng ta đang không ngừng tăng lên. — [1] —. Do đó, chúng ta sẽ mở một chi nhánh tại Leesburg trong năm nay.<br><br>Mặc dù chi nhánh mới sẽ không đi vào hoạt động cho đến ngày 1 tháng 7, nhưng về cơ bản nó đã sẵn sàng để khai trương. — [2] —. Tuy nhiên, vẫn còn một vài vị trí công việc trống cần được lấp đầy có thể xem tại www.southstreetbank.com/jobs."
        }
      },
      { 
        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? 'Most Leesburg staff have already been recruited.'", 
        options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" }, 
        correct: "B", 
        explanation: {
          dan_chung: "[2] There remain, however, a couple of job openings to be filled...",
          ham_y: "Câu chèn vào có ý nghĩa 'Phần lớn nhân sự đã được tuyển xong', tạo sự tương phản rất mượt mà với câu phía sau: 'Tuy nhiên, vẫn còn sót lại vài vị trí trống cần tuyển'.<br>↳ <i>'already been recruited'</i> (đã được tuyển xong) đứng trước liên từ <i>'however'</i> (tuy nhiên), nối với <i>'a couple of job openings to be filled'</i> (vài vị trí vẫn cần tuyển).",
          lien_he: "Dạng bài 'Insert a sentence' (Điền câu vào vị trí thích hợp) yêu cầu bạn phải tìm 'từ khóa liên kết' (Linkers). Ở đây, liên từ 'However' chỉ sự tương phản là chìa khóa. 'Đã tuyển gần hết' (Most recruited) >< Tuy nhiên (However) >< 'Vẫn còn một vài chỗ trống' (a couple of openings remain).",
          tu_vung: [
            { tu: "expand", nghia: "mở rộng" },
            { tu: "demand", nghia: "nhu cầu" },
            { tu: "branch", nghia: "chi nhánh" },
            { tu: "in operation", nghia: "đi vào hoạt động" },
            { tu: "job opening", nghia: "vị trí công việc đang tuyển dụng" }
          ],
          dich_bai: "<b>Gửi:</b> Nhân viên ngân hàng South Street<br><b>Từ:</b> William Rees-Yates, Giám đốc Điều hành<br><b>Ngày:</b> 12 tháng 5<br><br>Tôi vui mừng thông báo rằng ngân hàng của chúng ta đang mở rộng. Nhờ chiến dịch tiếp thị sáng tạo và dịch vụ chăm sóc khách hàng đạt giải thưởng, nhu cầu về các dịch vụ của chúng ta đang không ngừng tăng lên. — [1] —. Do đó, chúng ta sẽ mở một chi nhánh tại Leesburg trong năm nay.<br><br>Mặc dù chi nhánh mới sẽ không đi vào hoạt động cho đến ngày 1 tháng 7, nhưng về cơ bản nó đã sẵn sàng để khai trương. — [2] —. Tuy nhiên, vẫn còn một vài vị trí công việc trống cần được lấp đầy có thể xem tại www.southstreetbank.com/jobs."
        }
      }
    ]
  }, // <--- Dấu phẩy kết nối để dán Phần 3
// ==========================================
  // BÀI 21 (Standing Desks)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>MEMO</b><br><b>To:</b> All Employees<br><b>From:</b> Don Wunder, Director of Facilities<br><b>Date:</b> February 10<br><b>Subject:</b> Standing Desks<br><br>As part of our commitment to employee wellness, we are evaluating new office equipment. Five standing desks will be available on a trial basis from February 20 to March 15 in the second-floor breakroom. The new Chanti B45 model is adjustable, so you can alternate between sitting and standing throughout the day. Please feel free to test them out and leave your feedback on the signup sheet provided nearby."
    ],
    questions: [
      { 
        text: "What is the purpose of the memo?", 
        options: { A: "To ask for help assembling furniture", B: "To offer staff a chance to try a new type of furniture", C: "To encourage participation in exercise classes", D: "To survey worker preferences for a new breakroom" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Five standing desks will be available on a trial basis... Please feel free to test them out",
          ham_y: "Công ty cung cấp một số bàn làm việc mới để nhân viên có cơ hội dùng thử và đóng góp ý kiến.<br>↳ <i>'available on a trial basis'</i> (có sẵn để dùng thử) & <i>'test them out'</i> (kiểm tra chúng) = <i>'offer staff a chance to try'</i> (cung cấp cho nhân viên cơ hội dùng thử).",
          lien_he: "Trong môi trường công sở hiện đại, việc trang bị 'standing desks' (bàn làm việc đứng) rất phổ biến để cải thiện sức khỏe (employee wellness) cho nhân viên văn phòng.",
          tu_vung: [
            { tu: "wellness", nghia: "sức khỏe, sự khỏe mạnh" },
            { tu: "trial basis", nghia: "trên cơ sở dùng thử" },
            { tu: "alternate", nghia: "luân phiên" }
          ],
          dich_bai: "<b>BẢN GHI NHỚ</b><br><b>Gửi:</b> Tất cả Nhân viên<br><b>Từ:</b> Don Wunder, Giám đốc Cơ sở vật chất<br><b>Ngày:</b> 10 tháng 2<br><b>Chủ đề:</b> Bàn làm việc đứng<br><br>Như một phần trong cam kết của chúng tôi đối với sức khỏe nhân viên, chúng tôi đang đánh giá các thiết bị văn phòng mới. Năm chiếc bàn làm việc đứng sẽ có sẵn để dùng thử từ ngày 20 tháng 2 đến ngày 15 tháng 3 tại phòng nghỉ ngơi trên tầng hai. Mẫu Chanti B45 mới có thể điều chỉnh được, vì vậy bạn có thể luân phiên giữa ngồi và đứng suốt cả ngày. Vui lòng thoải mái dùng thử chúng và để lại phản hồi của bạn trên bảng đăng ký được cung cấp gần đó."
        }
      },
      { 
        text: "What is indicated about the Chanti B45 model?", 
        options: { A: "It is difficult to use.", B: "It increases productivity.", C: "It can be adjusted to different heights.", D: "It is very expensive." }, 
        correct: "C", 
        explanation: {
          dan_chung: "The new Chanti B45 model is adjustable, so you can alternate between sitting and standing",
          ham_y: "Chiếc bàn này có thiết kế linh hoạt, cho phép người dùng thay đổi độ cao để có thể vừa ngồi vừa đứng làm việc.<br>↳ <i>'adjustable'</i> & <i>'alternate between sitting and standing'</i> (có thể điều chỉnh để luân phiên ngồi và đứng) = <i>'adjusted to different heights'</i> (được điều chỉnh ở các độ cao khác nhau).",
          lien_he: "Trong môi trường công sở hiện đại, việc trang bị 'standing desks' (bàn làm việc đứng) rất phổ biến để cải thiện sức khỏe (employee wellness) cho nhân viên văn phòng.",
          tu_vung: [
            { tu: "wellness", nghia: "sức khỏe, sự khỏe mạnh" },
            { tu: "trial basis", nghia: "trên cơ sở dùng thử" },
            { tu: "alternate", nghia: "luân phiên" }
          ],
          dich_bai: "<b>BẢN GHI NHỚ</b><br><b>Gửi:</b> Tất cả Nhân viên<br><b>Từ:</b> Don Wunder, Giám đốc Cơ sở vật chất<br><b>Ngày:</b> 10 tháng 2<br><b>Chủ đề:</b> Bàn làm việc đứng<br><br>Như một phần trong cam kết của chúng tôi đối với sức khỏe nhân viên, chúng tôi đang đánh giá các thiết bị văn phòng mới. Năm chiếc bàn làm việc đứng sẽ có sẵn để dùng thử từ ngày 20 tháng 2 đến ngày 15 tháng 3 tại phòng nghỉ ngơi trên tầng hai. Mẫu Chanti B45 mới có thể điều chỉnh được, vì vậy bạn có thể luân phiên giữa ngồi và đứng suốt cả ngày. Vui lòng thoải mái dùng thử chúng và để lại phản hồi của bạn trên bảng đăng ký được cung cấp gần đó."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 22 (Drilling Process)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>MEMO</b><br><b>To:</b> Building 3 Occupants<br><b>From:</b> Maintenance Department<br><b>Date:</b> September 4<br><br>Please be advised that construction crews will be drilling into the concrete foundation of Building 3 tomorrow morning starting at 8:00 A.M. The drilling is expected to take several hours, and the work will be very noisy. — [1] —.<br><br>I have requested that the contractors begin drilling on the east side of the building and move westward. — [2] —. This should minimize the disruption for those of you with offices on the west side, at least for the first part of the morning. — [3] —. We apologize for the inconvenience and appreciate your patience as we work to upgrade our facilities. — [4] —."
    ],
    questions: [
      { 
        text: "In which position does the following sentence best belong? 'However, there is little that can be done regarding noise levels.'", 
        options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" }, 
        correct: "C", 
        explanation: {
          dan_chung: "[3] This should minimize the disruption for those of you with offices on the west side... [3]",
          ham_y: "Câu chèn vào có nghĩa 'Tuy nhiên, có rất ít cách để xử lý vấn đề tiếng ồn'. Câu này nằm hoàn hảo ở vị trí [3], sau khi tác giả vừa đề cập đến giải pháp để 'giảm thiểu sự gián đoạn' (bắt đầu khoan từ phía đông).<br>↳ <i>'minimize the disruption'</i> (giảm thiểu sự gián đoạn) đứng trước, tiếp nối bằng liên từ <i>'However'</i> (tuy nhiên) đi liền với <i>'little that can be done regarding noise'</i> (ít có thể làm gì đối với tiếng ồn).",
          lien_he: "Trong các bài thông báo sửa chữa (Maintenance Notice), quản lý thường dùng cấu trúc: 'Xin lỗi vì tiếng ồn' -> 'Chúng tôi sẽ cố gắng giảm thiểu (minimize)' -> 'Nhưng không thể tránh hoàn toàn (However)'.",
          tu_vung: [
            { tu: "drilling", nghia: "việc khoan" },
            { tu: "minimize", nghia: "giảm thiểu" },
            { tu: "disruption", nghia: "sự gián đoạn, sự phá vỡ" },
            { tu: "inconvenience", nghia: "sự bất tiện" }
          ],
          dich_bai: "<b>BẢN GHI NHỚ</b><br><b>Gửi:</b> Cư dân Tòa nhà số 3<br><b>Từ:</b> Bộ phận Bảo trì<br><b>Ngày:</b> 4 tháng 9<br><br>Xin lưu ý rằng đội xây dựng sẽ tiến hành khoan vào nền móng bê tông của Tòa nhà số 3 vào sáng mai bắt đầu lúc 8:00 Sáng. Quá trình khoan dự kiến sẽ mất vài giờ, và công việc sẽ rất ồn ào. — [1] —.<br><br>Tôi đã yêu cầu các nhà thầu bắt đầu khoan ở phía đông của tòa nhà và di chuyển dần sang phía tây. — [2] —. Điều này sẽ giúp giảm thiểu sự gián đoạn cho những ai có văn phòng ở phía tây, ít nhất là trong nửa đầu buổi sáng. — [3] —. Chúng tôi xin lỗi vì sự bất tiện này và đánh giá cao sự kiên nhẫn của các bạn khi chúng tôi nỗ lực nâng cấp cơ sở vật chất của mình. — [4] —."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 23 (Customer Service Study)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "Last week we conducted a study to gather opinions about our customer service. We contacted 100 randomly selected clients who had used our services in the past month. Overall, the results were very positive. Most people expressed satisfaction with their communication with our representatives. Their questions about packaging services and shipping charges were answered promptly and accurately. However, several clients noted that the tracking feature on our Web site was occasionally difficult to use."
    ],
    questions: [
      { 
        text: "Where does the author most likely work?", 
        options: { A: "At a market research firm", B: "At a delivery company", C: "At an insurance agency", D: "At an advertising company" }, 
        correct: "B", 
        explanation: {
          dan_chung: "questions about packaging services and shipping charges... tracking feature on our Web site",
          ham_y: "Bài viết sử dụng nhiều thuật ngữ liên quan đến việc đóng gói, vận chuyển và theo dõi lộ trình hàng hóa, chứng tỏ tác giả làm việc cho một công ty chuyên về giao nhận vận tải.<br>↳ <i>'packaging'</i> (đóng gói), <i>'shipping'</i> (giao hàng) & <i>'tracking'</i> (theo dõi lộ trình) = <i>'delivery company'</i> (công ty giao hàng).",
          lien_he: "Trong TOEIC, một 'Delivery company' hoặc 'Shipping/Courier/Logistics company' luôn gắn liền với các dịch vụ 'tracking' (theo dõi) và 'packaging' (đóng gói).",
          tu_vung: [
            { tu: "conduct a study", nghia: "tiến hành một nghiên cứu" },
            { tu: "randomly selected", nghia: "được chọn ngẫu nhiên" },
            { tu: "promptly", nghia: "một cách nhanh chóng, ngay lập tức" },
            { tu: "tracking feature", nghia: "tính năng theo dõi" }
          ],
          dich_bai: "Tuần trước, chúng tôi đã tiến hành một nghiên cứu để thu thập ý kiến về dịch vụ khách hàng của chúng tôi. Chúng tôi đã liên hệ với 100 khách hàng được chọn ngẫu nhiên, những người đã sử dụng dịch vụ của chúng tôi trong tháng qua. Nhìn chung, kết quả rất tích cực. Hầu hết mọi người bày tỏ sự hài lòng với việc giao tiếp của họ với các đại diện của chúng tôi. Những câu hỏi của họ về dịch vụ đóng gói và phí vận chuyển đã được trả lời một cách nhanh chóng và chính xác. Tuy nhiên, một vài khách hàng lưu ý rằng tính năng theo dõi trên trang web của chúng tôi đôi khi khó sử dụng."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 24 (Tillford Press)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "LONDON (2 February) — Tillford Press announced today the launch of its new imprint, Tillford Exalt. This new line will feature books promoting healthy lifestyles and memoirs with uplifting messages. The imprint’s first title will be by retired athlete Sarah Lai. Her book is set for release in December."
    ],
    questions: [
      { 
        text: "What is the main purpose of the article?", 
        options: { A: "To promote new cookware", B: "To advertise a sports concert", C: "To announce a new series of books", D: "To provide a local calendar" }, 
        correct: "C", 
        explanation: {
          dan_chung: "launch of its new imprint, Tillford Exalt. This new line will feature books...",
          ham_y: "Bài báo thông báo về việc nhà xuất bản sắp tung ra một thương hiệu in ấn/dòng sách hoàn toàn mới.<br>↳ <i>'launch of its new imprint'</i> & <i>'new line'</i> (ra mắt dòng/thương hiệu sách mới) = <i>'announce a new series of books'</i> (thông báo một chuỗi sách mới).",
          lien_he: "Trong ngành xuất bản (Publishing), một nhà xuất bản lớn có thể sở hữu nhiều 'imprints' (thương hiệu phụ/dòng sách). Mỗi imprint tập trung vào một thể loại riêng (ví dụ: dòng sách khoa học, dòng sách phong cách sống).",
          tu_vung: [
            { tu: "launch", nghia: "ra mắt (sản phẩm)" },
            { tu: "imprint", nghia: "thương hiệu xuất bản (phụ)" },
            { tu: "uplifting", nghia: "truyền cảm hứng, nâng đỡ tinh thần" },
            { tu: "memoir", nghia: "hồi ký" }
          ],
          dich_bai: "LONDON (Ngày 2 tháng 2) — Tillford Press hôm nay đã công bố ra mắt thương hiệu xuất bản mới của mình, Tillford Exalt. Dòng sản phẩm mới này sẽ giới thiệu những cuốn sách thúc đẩy lối sống lành mạnh và các cuốn hồi ký với những thông điệp truyền cảm hứng. Đầu sách đầu tiên của thương hiệu này sẽ do cựu vận động viên Sarah Lai viết. Cuốn sách của cô dự kiến sẽ được phát hành vào tháng Mười Hai."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 25 (Smartphone Pricing)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "Gorman Electronics has finally revealed the details of its newest smartphone. The Pro Phone 4, which includes 512 GB of storage and an upgraded camera, will hit the shelves on 11 June. The £999 starting price is £100 more than that of the previous model, but tech experts believe the new features justify the cost."
    ],
    questions: [
      { 
        text: "How much did the previous model cost?", 
        options: { A: "£99", B: "£100", C: "£899", D: "£1099" }, 
        correct: "C", 
        explanation: {
          dan_chung: "The £999 starting price is £100 more than that of the previous model",
          ham_y: "Chiếc điện thoại mới có giá £999, mức giá này cao hơn £100 so với phiên bản tiền nhiệm. Suy ra, mẫu cũ có giá £899 (£999 - £100).<br>↳ <i>'£999 starting price is £100 more than... previous model'</i> (giá khởi điểm 999 bảng đắt hơn 100 bảng so với mẫu trước) = <i>'previous model cost £899'</i> (mẫu trước giá 899 bảng).",
          lien_he: "Đây là dạng câu hỏi Tính toán cơ bản trong TOEIC. Bạn phải chú ý đến các cụm từ so sánh như 'more than' (nhiều hơn), 'less than' (ít hơn), 'discount of' (giảm giá) để làm phép cộng/trừ chính xác.",
          tu_vung: [
            { tu: "reveal", nghia: "tiết lộ, công bố" },
            { tu: "hit the shelves", nghia: "lên kệ (được bán ra thị trường)" },
            { tu: "justify", nghia: "biện minh, chứng minh là hợp lý" }
          ],
          dich_bai: "Gorman Electronics cuối cùng đã tiết lộ chi tiết về chiếc điện thoại thông minh mới nhất của mình. Pro Phone 4, bao gồm 512 GB dung lượng lưu trữ và một camera được nâng cấp, sẽ chính thức lên kệ vào ngày 11 tháng 6. Giá khởi điểm £999 đắt hơn £100 so với mẫu trước đó, nhưng các chuyên gia công nghệ tin rằng các tính năng mới hoàn toàn xứng đáng với chi phí đó."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 26 (Hannen Stores)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "The Hannen Corporation recently launched a unique training initiative called the In-Store Project. This project places employees from the corporate headquarters in retail stores, where they are paired with store employees to work typical shifts. The goal is to help corporate staff better understand the day-to-day operations and customer interactions on the sales floor."
    ],
    questions: [
      { 
        text: "What does the project involve?", 
        options: { A: "Store employees visiting the headquarters", B: "Hiring new interns for the summer", C: "Corporate employees temporarily working in stores", D: "Redesigning the layout of retail stores" }, 
        correct: "C", 
        explanation: {
          dan_chung: "This project places employees from the corporate headquarters in retail stores... to work typical shifts.",
          ham_y: "Sáng kiến này liên quan đến việc sắp xếp nhân viên văn phòng từ trụ sở chính xuống làm việc tạm thời theo ca tại các cửa hàng bán lẻ.<br>↳ <i>'places employees from the corporate headquarters in retail stores'</i> (điều nhân sự từ trụ sở chính xuống cửa hàng bán lẻ) = <i>'Corporate employees temporarily working in stores'</i> (Nhân viên công ty làm việc tạm thời tại cửa hàng).",
          lien_he: "Nhiều tập đoàn bán lẻ (Retail chains) có chương trình cử nhân sự văn phòng (corporate staff) xuống làm việc trực tiếp tại cửa hàng vài ngày trong năm để hiểu rõ hơn trải nghiệm của nhân viên cấp dưới và khách hàng.",
          tu_vung: [
            { tu: "initiative", nghia: "sáng kiến, bước đầu" },
            { tu: "headquarters", nghia: "trụ sở chính" },
            { tu: "typical shifts", nghia: "các ca làm việc điển hình" },
            { tu: "interaction", nghia: "sự tương tác" }
          ],
          dich_bai: "Tập đoàn Hannen gần đây đã khởi xướng một sáng kiến đào tạo độc đáo mang tên Dự án Tại-cửa-hàng (In-Store Project). Dự án này đưa các nhân viên từ trụ sở chính của tập đoàn xuống các cửa hàng bán lẻ, nơi họ được ghép cặp với nhân viên cửa hàng để làm các ca làm việc điển hình. Mục tiêu là giúp đội ngũ nhân viên công ty hiểu rõ hơn về hoạt động hàng ngày và sự tương tác với khách hàng tại khu vực bán hàng."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 27 (Karlinga Beach Survey)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "A recent survey regarding the future development of Karlinga Beach yielded interesting results. Respondents to the survey included both local residents and tourists. In one key result, more than 80 percent agreed that there should be more emphasis on eco-friendly tourism, rather than building large resort complexes."
    ],
    questions: [
      { 
        text: "What was a result of the survey?", 
        options: { A: "Residents want more ferry service.", B: "Tourists want cheaper hotels.", C: "There is strong support for green tourism.", D: "The university should move to a new location." }, 
        correct: "C", 
        explanation: {
          dan_chung: "more than 80 percent agreed that there should be more emphasis on eco-friendly tourism",
          ham_y: "Khảo sát cho thấy phần lớn người tham gia có xu hướng ủng hộ mạnh mẽ các mô hình du lịch xanh và thân thiện với môi trường.<br>↳ <i>'more than 80 percent agreed'</i> (hơn 80% đồng tình) = <i>'strong support'</i> (sự ủng hộ mạnh mẽ); <i>'eco-friendly tourism'</i> (du lịch thân thiện với môi trường) = <i>'green tourism'</i> (du lịch xanh).",
          lien_he: "Thuật ngữ 'eco-friendly' (thân thiện môi trường) và 'green' (xanh) được dùng thay thế cho nhau liên tục trong TOEIC, đặc biệt trong các chủ đề về du lịch (tourism), phát triển bền vững, hoặc sản phẩm tái chế.",
          tu_vung: [
            { tu: "yield", nghia: "mang lại, sản sinh (kết quả)" },
            { tu: "respondent", nghia: "người trả lời (khảo sát)" },
            { tu: "emphasis on", nghia: "sự chú trọng/nhấn mạnh vào" },
            { tu: "eco-friendly", nghia: "thân thiện với môi trường" }
          ],
          dich_bai: "Một cuộc khảo sát gần đây liên quan đến sự phát triển trong tương lai của Bãi biển Karlinga đã mang lại những kết quả thú vị. Những người trả lời khảo sát bao gồm cả cư dân địa phương lẫn khách du lịch. Trong một kết quả đáng chú ý, hơn 80% đồng ý rằng nên chú trọng nhiều hơn vào hình thức du lịch thân thiện với môi trường, thay vì xây dựng các khu phức hợp nghỉ dưỡng rộng lớn."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 28 (Design Glory)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "After running a successful online jewelry boutique for three years, Tamara Banda has finally set up a brick-and-mortar store for her brand, Design Glory. The new shop, located in the city's Shadeside Plaza shopping area, opened its doors to the public on November 9."
    ],
    questions: [
      { 
        text: "What is true about Design Glory?", 
        options: { A: "It is an online-only business.", B: "It has a physical shop location.", C: "It sells heavy metal supplies.", D: "It was closed on Saturdays." }, 
        correct: "B", 
        explanation: {
          dan_chung: "Tamara Banda has finally set up a brick-and-mortar store for her brand",
          ham_y: "Công ty này đã mở một cửa hàng bán lẻ truyền thống (có mặt bằng thực tế) sau một thời gian chỉ bán trực tuyến.<br>↳ <i>'brick-and-mortar store'</i> (cửa hàng gạch-và-vữa / cửa hàng ngoài đời thực) = <i>'physical shop location'</i> (có địa điểm cửa hàng vật lý).",
          lien_he: "'Brick-and-mortar' là một thành ngữ (idiom) phổ biến trong kinh doanh để chỉ các cửa hàng truyền thống có địa điểm thật (được xây bằng gạch và vữa), phân biệt với cửa hàng thương mại điện tử (e-commerce/online store).",
          tu_vung: [
            { tu: "boutique", nghia: "cửa hàng nhỏ (thường bán quần áo, trang sức)" },
            { tu: "brick-and-mortar", nghia: "truyền thống, có mặt bằng thực tế" },
            { tu: "set up", nghia: "thành lập, thiết lập" }
          ],
          dich_bai: "Sau khi điều hành một cửa hàng trang sức trực tuyến thành công trong ba năm, Tamara Banda cuối cùng đã thiết lập một cửa hàng truyền thống cho thương hiệu của mình, Design Glory. Cửa hàng mới, tọa lạc tại khu mua sắm Shadeside Plaza của thành phố, đã mở cửa đón công chúng vào ngày 9 tháng 11."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 29 (Community Garden)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Dear Neighbor,</b><br><br>Now that the long, cold winter is just behind us, we would like to invite you to help us improve the newly established Moon Township Community Garden. We are looking for volunteers to help plant vegetables and flowers this weekend."
    ],
    questions: [
      { 
        text: "During which season was the notice most likely written?", 
        options: { A: "Winter", B: "Spring", C: "Summer", D: "Autumn" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Now that the long, cold winter is just behind us...",
          ham_y: "Vì mùa đông vừa mới trôi qua, nên thời điểm bức thư được viết chắn chắn là vào mùa xuân.<br>↳ <i>'winter is just behind us'</i> (mùa đông đã ở lại phía sau) = <i>'Spring'</i> (mùa Xuân).",
          lien_he: "Trong các bài thông báo của cộng đồng khu dân cư (Community Notice), người ta thường dựa vào các yếu tố thời tiết hoặc mùa màng để lên kế hoạch dọn dẹp hoặc trồng cây (garden planting thường diễn ra vào mùa Xuân).",
          tu_vung: [
            { tu: "established", nghia: "được thành lập, được thiết lập" },
            { tu: "volunteer", nghia: "tình nguyện viên" },
            { tu: "plant", nghia: "trồng (cây)" }
          ],
          dich_bai: "<b>Gửi những người hàng xóm thân mến,</b><br><br>Giờ đây, khi mùa đông dài và lạnh giá vừa trôi qua, chúng tôi muốn mời bạn giúp chúng tôi cải tạo Khu vườn Cộng đồng Thị trấn Moon mới được thành lập. Chúng tôi đang tìm kiếm các tình nguyện viên để giúp trồng rau và hoa vào cuối tuần này."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 30 (Feller Airlines)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Feller Airlines Tarmac Delay Plan</b><br><br>In the rare event of a lengthy tarmac delay, Feller Airlines is committed to passenger comfort. If the delay lasts more than 60 minutes, we will provide complimentary snacks and beverages. Passengers will receive notifications regarding the status of the delay at the gate every 30 minutes."
    ],
    questions: [
      { 
        text: "How often will passengers get updates?", 
        options: { A: "Every 15 minutes", B: "Every 30 minutes", C: "Every hour", D: "Once a day" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Passengers will receive notifications regarding the status of the delay at the gate every 30 minutes.",
          ham_y: "Hãng hàng không cam kết sẽ gửi thông báo để cập nhật tình hình trễ chuyến bay cho hành khách với tần suất 30 phút một lần.<br>↳ <i>'receive notifications'</i> (nhận các thông báo) = <i>'get updates'</i> (nhận bản cập nhật thông tin); chu kỳ <i>'every 30 minutes'</i> (mỗi 30 phút) được giữ nguyên.",
          lien_he: "Khi xảy ra tình trạng trễ chuyến (Delay), các hãng hàng không thường có quy định nghiêm ngặt về việc cung cấp đồ ăn/nước uống (snacks/beverages) và phải liên tục cập nhật thông tin (updates/notifications) để hành khách không bị hoang mang.",
          tu_vung: [
            { tu: "tarmac delay", nghia: "sự trễ chuyến trên đường băng" },
            { tu: "lengthy", nghia: "kéo dài, dài dòng" },
            { tu: "complimentary", nghia: "miễn phí (được tặng kèm)" },
            { tu: "notification", nghia: "sự thông báo" }
          ],
          dich_bai: "<b>Kế hoạch Xử lý Trễ chuyến trên Đường băng của Hãng hàng không Feller</b><br><br>Trong trường hợp hiếm hoi xảy ra việc trễ chuyến kéo dài trên đường băng, Hãng hàng không Feller cam kết đảm bảo sự thoải mái cho hành khách. Nếu sự chậm trễ kéo dài hơn 60 phút, chúng tôi sẽ cung cấp đồ ăn nhẹ và đồ uống miễn phí. Hành khách sẽ nhận được thông báo về tình trạng trễ chuyến tại cổng mỗi 30 phút."
        }
      }
    ]
  }, // <--- Dấu phẩy kết nối
// ==========================================
  // BÀI 31 (Marigold Arena)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>City Planning Notice</b><br><br>The proposed Marigold Sports Arena will be built on the site of the former Marigold Furniture Factory. The building has remained empty since Marigold Furniture moved its production to a larger facility five years ago. Plans for the new arena have been sent to the city council for final approval."
    ],
    questions: [
      { 
        text: "What will the new structure replace?", 
        options: { A: "An empty lot", B: "A city park", C: "An unused building", D: "A shopping mall" }, 
        correct: "C", 
        explanation: {
          dan_chung: "built on the site of the former Marigold Furniture Factory. The building has remained empty...",
          ham_y: "Khu phức hợp thể thao mới sẽ được xây dựng trên nền của một nhà máy cũ kỹ đã bị bỏ trống suốt 5 năm qua.<br>↳ <i>'building has remained empty'</i> (tòa nhà vẫn đang bị bỏ trống) = <i>'unused building'</i> (tòa nhà không được sử dụng).",
          lien_he: "Khi đọc tin tức quy hoạch đô thị (City Planning), hãy chú ý đến các từ chỉ sự thay thế, phá dỡ như 'replace', 'former site', 'redevelop', 'demolish'.",
          tu_vung: [
            { tu: "proposed", nghia: "được đề xuất" },
            { tu: "former", nghia: "trước đây, cũ" },
            { tu: "remain empty", nghia: "vẫn còn trống/bỏ hoang" }
          ],
          dich_bai: "<b>Thông báo Quy hoạch Thành phố</b><br><br>Đấu trường Thể thao Marigold được đề xuất sẽ được xây dựng trên địa điểm của Nhà máy Nội thất Marigold trước đây. Tòa nhà này đã bị bỏ trống kể từ khi Nội thất Marigold chuyển cơ sở sản xuất đến một cơ sở lớn hơn cách đây năm năm. Kế hoạch cho đấu trường mới đã được gửi đến hội đồng thành phố để phê duyệt cuối cùng."
        }
      },
      { 
        text: "The word 'draft' in paragraph 2, line 1 is closest in meaning to:", 
        options: { A: "Wind", B: "Cost", C: "Version", D: "Change" }, 
        correct: "C", 
        explanation: {
          dan_chung: "Ngữ cảnh của bài nói về các bản phác thảo/kế hoạch xây dựng (Plans).",
          ham_y: "Mặc dù từ 'draft' có nhiều nghĩa (gió lùa, lệnh gọi nhập ngũ, bản nháp), nhưng trong ngữ cảnh thiết kế và quy hoạch, nó đồng nghĩa với một 'phiên bản' (version) của tài liệu/bản vẽ.<br>↳ <i>'draft'</i> (bản nháp, bản thảo) = <i>'version'</i> (phiên bản).",
          lien_he: "Dạng bài 'Từ vựng trong ngữ cảnh' (Vocabulary in context). Bạn không được dịch nghĩa gốc của từ, mà phải ghép nó vào câu để xem nghĩa nào hợp lý nhất.",
          tu_vung: [
            { tu: "proposed", nghia: "được đề xuất" },
            { tu: "former", nghia: "trước đây, cũ" },
            { tu: "remain empty", nghia: "vẫn còn trống/bỏ hoang" }
          ],
          dich_bai: "<b>Thông báo Quy hoạch Thành phố</b><br><br>Đấu trường Thể thao Marigold được đề xuất sẽ được xây dựng trên địa điểm của Nhà máy Nội thất Marigold trước đây. Tòa nhà này đã bị bỏ trống kể từ khi Nội thất Marigold chuyển cơ sở sản xuất đến một cơ sở lớn hơn cách đây năm năm. Kế hoạch cho đấu trường mới đã được gửi đến hội đồng thành phố để phê duyệt cuối cùng."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 32 (Itami Theater)
  // ==========================================
  {
    category: "B. NOTICE - MEMO - ARTICLE",
    type: "Single Passage",
    texts: [
      "<b>Interim Director Appointed</b><br><br>Ms. Li has been appointed as the interim director of the Itami Theater. She has been at Itami for ten years, previously serving as director of new play development. She will continue to guide the play selection for next season while the board searches for a permanent director."
    ],
    questions: [
      { 
        text: "What is suggested about the Itami Theater?", 
        options: { A: "It focuses on new playwrights.", B: "It is closing down.", C: "It is searching for costume designers.", D: "It has operated for at least ten years." }, 
        correct: "D", 
        explanation: {
          dan_chung: "She has been at Itami for ten years",
          ham_y: "Vì bà Li đã làm việc cho nhà hát này được 10 năm, nên suy ra một cách logic là nhà hát đã được thành lập và hoạt động ít nhất là 10 năm.<br>↳ <i>'She has been at Itami for ten years'</i> (Cô ấy đã ở Itami được 10 năm) = <i>'It has operated for at least ten years'</i> (Nó đã hoạt động ít nhất 10 năm).",
          lien_he: "Giống với bài Sunlight Sugar (Bài 18). Đây là kỹ năng suy luận tuổi đời (Age/Lifespan) của một tổ chức dựa trên thâm niên của nhân viên hoặc dữ liệu báo cáo tài chính cũ nhất.",
          tu_vung: [
            { tu: "interim", nghia: "tạm thời, lâm thời" },
            { tu: "appoint", nghia: "bổ nhiệm" },
            { tu: "permanent", nghia: "dài hạn, cố định" }
          ],
          dich_bai: "<b>Bổ nhiệm Giám đốc Lâm thời</b><br><br>Cô Li đã được bổ nhiệm làm giám đốc lâm thời của Nhà hát Itami. Cô đã làm việc tại Itami mười năm, trước đây giữ chức giám đốc phát triển kịch bản mới. Cô sẽ tiếp tục hướng dẫn việc lựa chọn vở kịch cho mùa giải tới trong khi hội đồng quản trị tìm kiếm một giám đốc chính thức."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 33 (Product Demonstrators)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>ADVERTISEMENT</b><br><br>Are you outgoing and enthusiastic? Do you enjoy talking to all types of people? BBD Staffing is seeking to hire product demonstrators to promote our clients' merchandise at local grocery stores. To apply, please upload a short video recording to our Web site telling us why you would be successful in this role."
    ],
    questions: [
      { 
        text: "What is a requirement for the position?", 
        options: { A: "A degree in marketing", B: "Ability to speak multiple languages", C: "An outgoing personality", D: "Previous experience in a bank" }, 
        correct: "C", 
        explanation: {
          dan_chung: "Are you outgoing and enthusiastic?",
          ham_y: "Tin tuyển dụng đặt ra tiêu chí tìm kiếm những ứng viên có tính cách cởi mở, hướng ngoại và nhiệt tình khi giao tiếp.<br>↳ Câu hỏi <i>'Are you outgoing...?'</i> (Bạn có phải là người hướng ngoại...?) = <i>'An outgoing personality'</i> (Một tính cách hướng ngoại).",
          lien_he: "Các vị trí như 'Product demonstrator' (Người giới thiệu sản phẩm), 'Sales rep' (Đại diện bán hàng), hoặc 'Customer service' (CSKH) luôn yêu cầu tính cách 'outgoing' (hướng ngoại), 'enthusiastic' (nhiệt tình), hoặc 'excellent communication skills'.",
          tu_vung: [
            { tu: "outgoing", nghia: "hướng ngoại, cởi mở" },
            { tu: "enthusiastic", nghia: "nhiệt tình, hăng hái" },
            { tu: "merchandise", nghia: "hàng hóa" }
          ],
          dich_bai: "<b>QUẢNG CÁO</b><br><br>Bạn có phải là người hướng ngoại và nhiệt tình không? Bạn có thích nói chuyện với mọi kiểu người không? BBD Staffing đang tìm kiếm để thuê những người giới thiệu sản phẩm để quảng bá hàng hóa của khách hàng chúng tôi tại các cửa hàng tạp hóa địa phương. Để nộp đơn, vui lòng tải một đoạn video ghi hình ngắn lên trang web của chúng tôi để cho chúng tôi biết lý do tại sao bạn sẽ thành công trong vai trò này."
        }
      },
      { 
        text: "What are applicants asked to do next?", 
        options: { A: "Complete a survey", B: "Schedule an interview", C: "Submit a video recording", D: "Provide references" }, 
        correct: "C", 
        explanation: {
          dan_chung: "To apply, please upload a short video recording to our Web site",
          ham_y: "Để ứng tuyển, ứng viên phải tải lên một đoạn video giới thiệu bản thân trên trang web của công ty.<br>↳ <i>'upload a short video recording'</i> (tải lên một đoạn video ghi hình ngắn) = <i>'Submit a video recording'</i> (Nộp một đoạn video).",
          lien_he: "Trong dạng bài Tuyển dụng (Job Advertisement), câu hỏi 'What to do next' hoặc 'How to apply' luôn nằm ở câu cuối cùng của đoạn văn.",
          tu_vung: [
            { tu: "outgoing", nghia: "hướng ngoại, cởi mở" },
            { tu: "enthusiastic", nghia: "nhiệt tình, hăng hái" },
            { tu: "merchandise", nghia: "hàng hóa" }
          ],
          dich_bai: "<b>QUẢNG CÁO</b><br><br>Bạn có phải là người hướng ngoại và nhiệt tình không? Bạn có thích nói chuyện với mọi kiểu người không? BBD Staffing đang tìm kiếm để thuê những người giới thiệu sản phẩm để quảng bá hàng hóa của khách hàng chúng tôi tại các cửa hàng tạp hóa địa phương. Để nộp đơn, vui lòng tải một đoạn video ghi hình ngắn lên trang web của chúng tôi để cho chúng tôi biết lý do tại sao bạn sẽ thành công trong vai trò này."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 34 (Harbis Stationery)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>Harbis Stationery Store Clearance Sale</b><br><br>Take advantage of our spring clearance sale! <br>• Box of 24 pens: £1.79 (10% off)<br>• Desk lamp: £19.99 (20% off)<br>• Wireless mouse: £17.99 (15% off)<br>• Any box of greeting cards or invitations: 50% off<br>• Backpack: £29.99 (30% off)"
    ],
    questions: [
      { 
        text: "Which item has the greatest percentage discount?", 
        options: { A: "Box of 24 pens", B: "Greeting cards or invitations", C: "Wireless mouse", D: "Desk lamp" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Any box of greeting cards or invitations: 50% off",
          ham_y: "So sánh các mức giảm giá: Bút (10%), Đèn (20%), Chuột (15%), Balo (30%), và Thiệp (50%). Suy ra thiệp được giảm phần trăm cao nhất.<br>↳ <i>'50% off'</i> là con số lớn nhất trong bài = <i>'greatest percentage discount'</i> (phần trăm giảm giá lớn nhất).",
          lien_he: "Dạng bài quét dữ liệu số (Scanning for numbers). Hãy nhìn thật nhanh vào các con số phần trăm (%) đi kèm với chữ 'off' hoặc 'discount' rồi so sánh chúng.",
          tu_vung: [
            { tu: "clearance sale", nghia: "bán thanh lý, xả hàng" },
            { tu: "take advantage of", nghia: "tận dụng lợi thế" },
            { tu: "invitation", nghia: "thiệp mời" }
          ],
          dich_bai: "<b>Chương trình Xả hàng của Cửa hàng Văn phòng phẩm Harbis</b><br><br>Hãy tận dụng đợt xả hàng mùa xuân của chúng tôi!<br>• Hộp 24 chiếc bút: £1.79 (giảm 10%)<br>• Đèn bàn: £19.99 (giảm 20%)<br>• Chuột không dây: £17.99 (giảm 15%)<br>• Bất kỳ hộp thiệp chúc mừng hoặc thiệp mời nào: giảm 50%<br>• Balo: £29.99 (giảm 30%)"
        }
      },
      { 
        text: "What is the cheapest item listed?", 
        options: { A: "Pens", B: "Desk lamp", C: "Mouse", D: "Backpack" }, 
        correct: "A", 
        explanation: {
          dan_chung: "Box of 24 pens: £1.79",
          ham_y: "So sánh các mức giá: Bút (£1.79), Đèn (£19.99), Chuột (£17.99), Balo (£29.99). Hộp bút có giá tiền thấp nhất.<br>↳ <i>'£1.79'</i> là con số tiền nhỏ nhất = <i>'cheapest item'</i> (món đồ rẻ nhất).",
          lien_he: "Khác với câu trên (hỏi % giảm giá), câu này hỏi về giá tiền gốc rẻ nhất (cheapest). Bạn phải dò theo các con số đứng sau ký hiệu bảng Anh (£).",
          tu_vung: [
            { tu: "clearance sale", nghia: "bán thanh lý, xả hàng" },
            { tu: "take advantage of", nghia: "tận dụng lợi thế" },
            { tu: "invitation", nghia: "thiệp mời" }
          ],
          dich_bai: "<b>Chương trình Xả hàng của Cửa hàng Văn phòng phẩm Harbis</b><br><br>Hãy tận dụng đợt xả hàng mùa xuân của chúng tôi!<br>• Hộp 24 chiếc bút: £1.79 (giảm 10%)<br>• Đèn bàn: £19.99 (giảm 20%)<br>• Chuột không dây: £17.99 (giảm 15%)<br>• Bất kỳ hộp thiệp chúc mừng hoặc thiệp mời nào: giảm 50%<br>• Balo: £29.99 (giảm 30%)"
        }
      }
    ]
  },

  // ==========================================
  // BÀI 35 (Puppet Show)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>Uncle Pete's Puppet Theater</b><br><br>Don't miss out on this year's magical performance! Uncle Pete's puppet adaptation of the well-known ballet <i>Moose Lake</i> has been delighting viewers of all ages for more than 30 years. Shows sell out every year, so get your tickets today online or at the box office."
    ],
    questions: [
      { 
        text: "What is true about the show?", 
        options: { A: "It is only for children.", B: "It is a new production.", C: "It is very popular.", D: "It is free to the public." }, 
        correct: "C", 
        explanation: {
          dan_chung: "delighting viewers of all ages for more than 30 years. Shows sell out every year",
          ham_y: "Vì buổi diễn đã thu hút khán giả suốt 30 năm qua và luôn ở trong tình trạng 'cháy vé', chứng tỏ nó vô cùng nổi tiếng và được yêu thích.<br>↳ <i>'delighting viewers... for more than 30 years'</i> & <i>'sell out every year'</i> (làm hài lòng khán giả hơn 30 năm và luôn cháy vé) = <i>'very popular'</i> (rất nổi tiếng/được yêu thích).",
          lien_he: "Từ vựng 'sell out' (bán sạch vé, cháy vé) luôn đồng nghĩa với sự thành công rực rỡ (great success) hoặc mức độ phổ biến cao (very popular/high demand).",
          tu_vung: [
            { tu: "puppet", nghia: "con rối" },
            { tu: "adaptation", nghia: "bản chuyển thể" },
            { tu: "delight", nghia: "làm vui thích, làm hài lòng" },
            { tu: "sell out", nghia: "bán sạch, cháy vé" }
          ],
          dich_bai: "<b>Nhà hát Múa rối của Chú Pete</b><br><br>Đừng bỏ lỡ màn trình diễn kỳ diệu của năm nay! Bản chuyển thể múa rối của chú Pete từ vở múa ba lê nổi tiếng <i>Moose Lake</i> đã làm hài lòng khán giả ở mọi lứa tuổi trong hơn 30 năm qua. Các buổi biểu diễn đều cháy vé mỗi năm, vì vậy hãy mua vé của bạn ngay hôm nay trên mạng hoặc tại quầy vé."
        }
      },
      { 
        text: "The show is based on what type of original work?", 
        options: { A: "A children's book", B: "A movie", C: "A video game", D: "A dance performance" }, 
        correct: "D", 
        explanation: {
          dan_chung: "puppet adaptation of the well-known ballet Moose Lake",
          ham_y: "Vở kịch rối này được chuyển thể từ tác phẩm gốc là 'ballet' (múa ba lê), đây là một bộ môn nghệ thuật múa.<br>↳ Từ vựng <i>'ballet'</i> (múa ba lê) = <i>'dance performance'</i> (một buổi biểu diễn nhảy/múa).",
          lien_he: "Dạng bài paraphrase từ vựng chuyên ngành sang từ vựng chung. Ví dụ: 'novel/poem' -> 'book/literature'; 'ballet/salsa' -> 'dance performance'; 'violin/piano' -> 'musical instrument'.",
          tu_vung: [
            { tu: "puppet", nghia: "con rối" },
            { tu: "adaptation", nghia: "bản chuyển thể" },
            { tu: "delight", nghia: "làm vui thích, làm hài lòng" },
            { tu: "sell out", nghia: "bán sạch, cháy vé" }
          ],
          dich_bai: "<b>Nhà hát Múa rối của Chú Pete</b><br><br>Đừng bỏ lỡ màn trình diễn kỳ diệu của năm nay! Bản chuyển thể múa rối của chú Pete từ vở múa ba lê nổi tiếng <i>Moose Lake</i> đã làm hài lòng khán giả ở mọi lứa tuổi trong hơn 30 năm qua. Các buổi biểu diễn đều cháy vé mỗi năm, vì vậy hãy mua vé của bạn ngay hôm nay trên mạng hoặc tại quầy vé."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 36 (Conference Schedule Change)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>Attention Conference Attendees</b><br><br>Please note a change to the afternoon schedule. The workshop on 'Digital Marketing Trends', originally scheduled for Room A at 2:00 P.M., has been moved to the Grand Ballroom to accommodate a larger audience. The time remains unchanged. We apologize for any confusion this may cause."
    ],
    questions: [
      { 
        text: "Why was the workshop moved?", 
        options: { A: "The original room was too small.", B: "The speaker arrived late.", C: "The projector in Room A was broken.", D: "The time of the presentation changed." }, 
        correct: "A", 
        explanation: {
          dan_chung: "moved to the Grand Ballroom to accommodate a larger audience.",
          ham_y: "Buổi hội thảo được chuyển sang phòng lớn hơn để có thể chứa được lượng khán giả đông hơn dự kiến, ngụ ý rằng căn phòng ban đầu không đủ chỗ.<br>↳ <i>'accommodate a larger audience'</i> (để chứa được lượng khán giả lớn hơn) = <i>'The original room was too small'</i> (căn phòng ban đầu quá nhỏ).",
          lien_he: "Khi có sự thay đổi địa điểm (Location Change) trong các thông báo sự kiện, lý do thường gặp nhất là 'to accommodate more people/a larger audience' (để chứa thêm người) hoặc do vấn đề bảo trì (maintenance issue).",
          tu_vung: [
            { tu: "attendee", nghia: "người tham dự" },
            { tu: "accommodate", nghia: "cung cấp chỗ chứa, đáp ứng" },
            { tu: "audience", nghia: "khán giả, người tham dự" }
          ],
          dich_bai: "<b>Lưu ý dành cho Người tham dự Hội nghị</b><br><br>Xin lưu ý sự thay đổi đối với lịch trình buổi chiều. Hội thảo về 'Xu hướng Tiếp thị Kỹ thuật số', ban đầu được lên lịch tại Phòng A lúc 2:00 Chiều, đã được chuyển sang Phòng khiêu vũ Grand để có thể chứa được lượng khán giả lớn hơn. Thời gian vẫn không thay đổi. Chúng tôi xin lỗi vì bất kỳ sự nhầm lẫn nào điều này có thể gây ra."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 37 (Apartment Rental Notice)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>Notice of Water Shut-off</b><br><br>Dear Residents of Oakwood Apartments,<br>Water service will be temporarily shut off in Building B on Tuesday, October 8, from 9:00 A.M. to 1:00 P.M. to repair a main pipe. Please make necessary preparations. We expect full service to resume promptly by early afternoon."
    ],
    questions: [
      { 
        text: "What should residents of Building B do on October 8?", 
        options: { A: "Pay their water bills", B: "Prepare for a lack of water", C: "Move their vehicles", D: "Contact the maintenance team" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Water service will be temporarily shut off... Please make necessary preparations.",
          ham_y: "Ban quản lý thông báo dịch vụ nước sẽ bị cắt tạm thời và yêu cầu cư dân có những sự chuẩn bị cần thiết cho việc này.<br>↳ <i>'Water service will be... shut off'</i> & <i>'make necessary preparations'</i> (Dịch vụ nước sẽ bị ngắt... hãy chuẩn bị) = <i>'Prepare for a lack of water'</i> (Chuẩn bị cho việc thiếu nước).",
          lien_he: "Cụm từ 'shut off / cut off / turn off' (cắt, ngắt) thường xuyên xuất hiện trong các bài thông báo của khu dân cư về vấn đề điện (electricity/power), nước (water), hoặc Internet.",
          tu_vung: [
            { tu: "shut off", nghia: "ngắt, cắt (điện, nước)" },
            { tu: "preparation", nghia: "sự chuẩn bị" },
            { tu: "resume", nghia: "bắt đầu lại, tiếp tục" },
            { tu: "promptly", nghia: "ngay lập tức, đúng giờ" }
          ],
          dich_bai: "<b>Thông báo Cắt nước</b><br><br>Kính gửi Cư dân Tòa nhà Oakwood,<br>Dịch vụ nước sẽ tạm thời bị ngắt ở Tòa nhà B vào thứ Ba, ngày 8 tháng 10, từ 9:00 Sáng đến 1:00 Chiều để sửa chữa một đường ống chính. Vui lòng thực hiện các sự chuẩn bị cần thiết. Chúng tôi dự kiến dịch vụ đầy đủ sẽ hoạt động trở lại ngay vào đầu buổi chiều."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 38 (Software Update Email)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>To:</b> All Staff<br><b>From:</b> IT Support<br><b>Subject:</b> System Update<br><br>A mandatory update for our accounting software will be installed overnight on Friday. You must save all your work and log out of the system before leaving the office on Friday evening. Any unsaved data will be lost during the reboot process."
    ],
    questions: [
      { 
        text: "What are employees required to do on Friday?", 
        options: { A: "Work an overnight shift", B: "Install a new software program", C: "Sign out of their accounts", D: "Change their passwords" }, 
        correct: "C", 
        explanation: {
          dan_chung: "You must save all your work and log out of the system before leaving",
          ham_y: "Để cập nhật phần mềm, mọi nhân viên được yêu cầu phải lưu lại công việc và đăng xuất khỏi hệ thống.<br>↳ <i>'log out of the system'</i> (đăng xuất khỏi hệ thống) = <i>'Sign out of their accounts'</i> (Đăng xuất khỏi tài khoản của họ).",
          lien_he: "Trong môi trường công sở, các thông báo từ bộ phận IT (IT Support) thường đi kèm với các yêu cầu bảo mật như 'log out / sign out' (đăng xuất) hoặc 'change password' (đổi mật khẩu).",
          tu_vung: [
            { tu: "mandatory", nghia: "bắt buộc" },
            { tu: "overnight", nghia: "qua đêm" },
            { tu: "reboot", nghia: "khởi động lại" }
          ],
          dich_bai: "<b>Gửi:</b> Tất cả Nhân viên<br><b>Từ:</b> Hỗ trợ CNTT<br><b>Chủ đề:</b> Cập nhật Hệ thống<br><br>Một bản cập nhật bắt buộc cho phần mềm kế toán của chúng ta sẽ được cài đặt qua đêm vào thứ Sáu. Bạn phải lưu tất cả công việc của mình và đăng xuất khỏi hệ thống trước khi rời văn phòng vào tối thứ Sáu. Bất kỳ dữ liệu nào chưa được lưu sẽ bị mất trong quá trình khởi động lại."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 39 (Jasmine Leaf Paint)
  // ==========================================
  {
    category: "C. ADVERTISEMENT",
    type: "Single Passage",
    texts: [
      "<b>United Kingdom's Top-Selling Paint Just Got Better</b><br><br><b>More Choices for Jasmine Leaf Paint</b><br><br>Jasmine Leaf Paint has been the number one selling house paint for the last five years in a row. — [1] —. But being the best seller is not enough for us. — [2] —. That's why we are bringing you additional ways to make your home more beautiful!<br><br>Our specially blended Blendex Formula interior paint and primer are prized for their stain resistance, excellent coverage, low-odour formula, ease of cleanup, and lifetime guarantee. In addition, we are now offering our paints in cans of five different sizes. And you can now get our paints in five beautiful finishes: flat, eggshell, satin, semigloss, and high gloss. — [3] —.<br><br>If you want rich, long-lasting, beautiful walls and ceilings inside your home, ask for Jasmine Leaf Paint at a quality paint store near you. — [4] —."
    ],
    questions: [
      { 
        text: "For whom is the advertisement primarily intended?", 
        options: { A: "Landscapers", B: "Paint store owners", C: "Art students", D: "Homeowners" }, 
        correct: "D", 
        explanation: {
          dan_chung: "make your home more beautiful! ... beautiful walls and ceilings inside your home",
          ham_y: "Quảng cáo liên tục sử dụng các từ chỉ nhà cửa để thuyết phục người đọc trang trí lại không gian sống của họ.<br>↳ Những cụm từ <i>'make your home more beautiful'</i> (làm nhà của bạn đẹp hơn) & <i>'walls and ceilings inside your home'</i> (tường và trần bên trong ngôi nhà bạn) nhắm trực tiếp đến = <i>'Homeowners'</i> (Những người chủ nhà).",
          lien_he: "Dạng câu hỏi về 'Đối tượng độc giả' (Target audience). Bạn phải dựa vào các đại từ 'you/your' để xem tác giả đang nói chuyện với ai. Ở đây 'your home' tức là độc giả là chủ nhà.",
          tu_vung: [
            { tu: "interior", nghia: "bên trong, nội thất" },
            { tu: "primer", nghia: "sơn lót" },
            { tu: "stain resistance", nghia: "khả năng chống ố bẩn" },
            { tu: "ceiling", nghia: "trần nhà" }
          ],
          dich_bai: "<b>Loại Sơn Bán Chạy Nhất Vương Quốc Anh Vừa Trở Nên Tốt Hơn</b><br><br><b>Nhiều Lựa chọn hơn cho Sơn Jasmine Leaf</b><br><br>Sơn Jasmine Leaf đã là loại sơn nhà bán chạy số một trong năm năm liên tiếp. — [1] —. Nhưng trở thành sản phẩm bán chạy nhất là chưa đủ đối với chúng tôi. — [2] —. Đó là lý do tại sao chúng tôi đang mang đến cho bạn những cách bổ sung để làm cho ngôi nhà của bạn đẹp hơn!<br><br>Công thức sơn lót và sơn nội thất Blendex pha trộn đặc biệt của chúng tôi được đánh giá cao nhờ khả năng chống ố, độ che phủ tuyệt vời, công thức ít mùi, dễ lau chùi và bảo hành trọn đời. Ngoài ra, chúng tôi hiện đang cung cấp sơn của mình trong các thùng có năm kích cỡ khác nhau. Và giờ đây bạn có thể mua sơn của chúng tôi với năm bề mặt hoàn thiện tuyệt đẹp: mờ, vỏ trứng, bóng lụa, bán bóng và độ bóng cao. — [3] —.<br><br>Nếu bạn muốn có những bức tường và trần nhà bên trong nhà mình phong phú, bền màu và đẹp mắt, hãy yêu cầu Sơn Jasmine Leaf tại một cửa hàng sơn chất lượng gần bạn. — [4] —."
        }
      },
      { 
        text: "What is new about Jasmine Leaf Paint?", 
        options: { A: "It is now stain resistant.", B: "It now features a lifetime guarantee.", C: "It is now thicker.", D: "It is now available in more sizes." }, 
        correct: "D", 
        explanation: {
          dan_chung: "In addition, we are now offering our paints in cans of five different sizes.",
          ham_y: "Để hỏi về điểm MỚI, ta cần tìm các từ như 'now', 'new', 'recently'. Bài viết nói rằng bây giờ công ty có cung cấp các thùng sơn với 5 kích cỡ khác nhau.<br>↳ <i>'now offering... in cans of five different sizes'</i> (bây giờ đang cung cấp ở 5 kích cỡ lon khác nhau) = <i>'available in more sizes'</i> (có sẵn ở nhiều kích cỡ hơn).",
          lien_he: "Các đặc điểm như 'stain resistance' hay 'lifetime guarantee' là những tính năng vốn đã được đánh giá cao từ lâu (are prized for), không phải là tính năng mới (new/now offering).",
          tu_vung: [
            { tu: "interior", nghia: "bên trong, nội thất" },
            { tu: "primer", nghia: "sơn lót" },
            { tu: "stain resistance", nghia: "khả năng chống ố bẩn" },
            { tu: "ceiling", nghia: "trần nhà" }
          ],
          dich_bai: "<b>Loại Sơn Bán Chạy Nhất Vương Quốc Anh Vừa Trở Nên Tốt Hơn</b><br><br><b>Nhiều Lựa chọn hơn cho Sơn Jasmine Leaf</b><br><br>Sơn Jasmine Leaf đã là loại sơn nhà bán chạy số một trong năm năm liên tiếp. — [1] —. Nhưng trở thành sản phẩm bán chạy nhất là chưa đủ đối với chúng tôi. — [2] —. Đó là lý do tại sao chúng tôi đang mang đến cho bạn những cách bổ sung để làm cho ngôi nhà của bạn đẹp hơn!<br><br>Công thức sơn lót và sơn nội thất Blendex pha trộn đặc biệt của chúng tôi được đánh giá cao nhờ khả năng chống ố, độ che phủ tuyệt vời, công thức ít mùi, dễ lau chùi và bảo hành trọn đời. Ngoài ra, chúng tôi hiện đang cung cấp sơn của mình trong các thùng có năm kích cỡ khác nhau. Và giờ đây bạn có thể mua sơn của chúng tôi với năm bề mặt hoàn thiện tuyệt đẹp: mờ, vỏ trứng, bóng lụa, bán bóng và độ bóng cao. — [3] —.<br><br>Nếu bạn muốn có những bức tường và trần nhà bên trong nhà mình phong phú, bền màu và đẹp mắt, hãy yêu cầu Sơn Jasmine Leaf tại một cửa hàng sơn chất lượng gần bạn. — [4] —."
        }
      },
      { 
        text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? 'This all means more convenient options for you.'", 
        options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" }, 
        correct: "C", 
        explanation: {
          dan_chung: "five different sizes. And you can now get our paints in five beautiful finishes... [3] This all means more convenient options for you.",
          ham_y: "Câu cần điền mang ý nghĩa 'Tất cả điều này mang lại nhiều lựa chọn tiện lợi hơn cho bạn'. Vị trí [3] là hợp lý nhất vì nó nằm ngay sau đoạn liệt kê các tùy chọn mới về kích cỡ và bề mặt sơn.<br>↳ Đại từ chỉ định <i>'This all'</i> (Tất cả điều này) dùng để tóm gọn lại việc liệt kê <i>'five different sizes'</i> (5 kích cỡ) và <i>'five beautiful finishes'</i> (5 lớp hoàn thiện) ở câu trước đó.",
          lien_he: "Dạng bài 'Insert a sentence' yêu cầu bạn tìm các đại từ chỉ định (This, That, These, Those) để liên kết với các danh từ đã được nhắc đến ở câu trước.",
          tu_vung: [
            { tu: "interior", nghia: "bên trong, nội thất" },
            { tu: "primer", nghia: "sơn lót" },
            { tu: "stain resistance", nghia: "khả năng chống ố bẩn" },
            { tu: "ceiling", nghia: "trần nhà" }
          ],
          dich_bai: "<b>Loại Sơn Bán Chạy Nhất Vương Quốc Anh Vừa Trở Nên Tốt Hơn</b><br><br><b>Nhiều Lựa chọn hơn cho Sơn Jasmine Leaf</b><br><br>Sơn Jasmine Leaf đã là loại sơn nhà bán chạy số một trong năm năm liên tiếp. — [1] —. Nhưng trở thành sản phẩm bán chạy nhất là chưa đủ đối với chúng tôi. — [2] —. Đó là lý do tại sao chúng tôi đang mang đến cho bạn những cách bổ sung để làm cho ngôi nhà của bạn đẹp hơn!<br><br>Công thức sơn lót và sơn nội thất Blendex pha trộn đặc biệt của chúng tôi được đánh giá cao nhờ khả năng chống ố, độ che phủ tuyệt vời, công thức ít mùi, dễ lau chùi và bảo hành trọn đời. Ngoài ra, chúng tôi hiện đang cung cấp sơn của mình trong các thùng có năm kích cỡ khác nhau. Và giờ đây bạn có thể mua sơn của chúng tôi với năm bề mặt hoàn thiện tuyệt đẹp: mờ, vỏ trứng, bóng lụa, bán bóng và độ bóng cao. — [3] —.<br><br>Nếu bạn muốn có những bức tường và trần nhà bên trong nhà mình phong phú, bền màu và đẹp mắt, hãy yêu cầu Sơn Jasmine Leaf tại một cửa hàng sơn chất lượng gần bạn. — [4] —."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 40 (Trexdale Supply)
  // ==========================================
  {
    category: "D. WEB PAGE",
    type: "Single Passage",
    texts: [
      "<b>About Our Company</b><br><br>Trexdale Supply specializes in designing, producing, and installing furniture for all types of scientific laboratories. We provide a range of fully assembled cabinets, workstations, benches, and more, all made exclusively at our production facility in Dallas, Texas. Our lab furniture is available in a wide variety of sizes and configurations to match the needs of any research application.<br><br>Our business offers products as well as design-consulting services. For start-up labs, we have a team of consulting specialists available to evaluate your facility's specific needs and assist you in arranging your space and choosing the most suitable furniture. Recently, for example, we were chosen by a major producer of biofuels to provide expert help in changing the layout of a research laboratory to maximize available space. As a result of this project, this client has realized substantial savings by reducing energy usage in the lab.<br><br>Please visit the 'Lab Planning' section of this Web site if you are interested in learning more about building or renovating a laboratory facility. There, you can fill out an interest form to contact one of our consultants about your next project."
    ],
    questions: [
      { 
        text: "What does Trexdale Supply make?", 
        options: { A: "Medical supplies", B: "Farming equipment", C: "Cabinets and furniture", D: "Glass laboratory equipment" }, 
        correct: "C", 
        explanation: {
          dan_chung: "installing furniture for all types of scientific laboratories... a range of fully assembled cabinets, workstations, benches",
          ham_y: "Công ty chuyên thiết kế, sản xuất và lắp đặt đồ nội thất dành cho các phòng thí nghiệm, bao gồm tủ, bàn làm việc và ghế dài.<br>↳ Bài nhắc trực tiếp từ <i>'furniture'</i> (đồ nội thất) và liệt kê các loại đồ như <i>'cabinets, workstations, benches'</i> = Đáp án <i>'Cabinets and furniture'</i>.",
          lien_he: "Các từ chỉ vật dụng như 'cabinets' (tủ), 'workstations' (bàn làm việc), 'benches' (ghế dài), 'chairs', 'desks' luôn được gom chung lại dưới danh từ chỉ thể loại là 'furniture'.",
          tu_vung: [
            { tu: "specialize in", nghia: "chuyên về" },
            { tu: "assemble", nghia: "lắp ráp" },
            { tu: "configuration", nghia: "cấu hình, sự sắp xếp" },
            { tu: "substantial", nghia: "đáng kể, lớn" }
          ],
          dich_bai: "<b>Về Công ty Chúng tôi</b><br><br>Trexdale Supply chuyên thiết kế, sản xuất và lắp đặt đồ nội thất cho tất cả các loại phòng thí nghiệm khoa học. Chúng tôi cung cấp nhiều loại tủ, trạm làm việc, ghế dài đã được lắp ráp hoàn chỉnh và nhiều thứ khác, tất cả đều được sản xuất độc quyền tại cơ sở sản xuất của chúng tôi ở Dallas, Texas. Đồ nội thất phòng thí nghiệm của chúng tôi có sẵn với nhiều kích thước và cấu hình đa dạng để phù hợp với nhu cầu của bất kỳ ứng dụng nghiên cứu nào.<br><br>Doanh nghiệp của chúng tôi cung cấp các sản phẩm cũng như dịch vụ tư vấn thiết kế. Đối với các phòng thí nghiệm mới thành lập, chúng tôi có một nhóm chuyên gia tư vấn sẵn sàng đánh giá các nhu cầu cụ thể của cơ sở bạn và hỗ trợ bạn sắp xếp không gian cũng như lựa chọn đồ nội thất phù hợp nhất. Gần đây, ví dụ, chúng tôi đã được một nhà sản xuất nhiên liệu sinh học lớn lựa chọn để cung cấp trợ giúp chuyên môn trong việc thay đổi bố cục của một phòng thí nghiệm nghiên cứu để tối đa hóa không gian có sẵn. Kết quả của dự án này là khách hàng này đã tiết kiệm được khoản tiền đáng kể bằng cách giảm mức sử dụng năng lượng trong phòng thí nghiệm.<br><br>Vui lòng truy cập phần 'Lập kế hoạch Phòng thí nghiệm' trên trang web này nếu bạn muốn tìm hiểu thêm về việc xây dựng hoặc cải tạo một cơ sở phòng thí nghiệm. Tại đó, bạn có thể điền vào biểu mẫu quan tâm để liên hệ với một trong những nhà tư vấn của chúng tôi về dự án tiếp theo của bạn."
        }
      },
      { 
        text: "What did Trexdale Supply do in a recent project?", 
        options: { A: "It reorganized a client's laboratory.", B: "It converted its vehicles to use biofuels.", C: "It expanded staffing at its production facility.", D: "It helped a client organize a trade show." }, 
        correct: "A", 
        explanation: {
          dan_chung: "Recently... changing the layout of a research laboratory to maximize available space.",
          ham_y: "Trong dự án gần đây nhất, công ty đã hỗ trợ khách hàng thay đổi sơ đồ bố trí của một phòng thí nghiệm để tối ưu hóa không gian.<br>↳ <i>'changing the layout'</i> (thay đổi cách bố trí) = <i>'reorganized'</i> (tổ chức, sắp xếp lại).",
          lien_he: "Từ vựng 'layout' (bố cục, sơ đồ) thường đi kèm với các động từ chỉ sự thay đổi như 'change', 'modify', 'reorganize', 'rearrange'.",
          tu_vung: [
            { tu: "specialize in", nghia: "chuyên về" },
            { tu: "assemble", nghia: "lắp ráp" },
            { tu: "configuration", nghia: "cấu hình, sự sắp xếp" },
            { tu: "substantial", nghia: "đáng kể, lớn" }
          ],
          dich_bai: "<b>Về Công ty Chúng tôi</b><br><br>Trexdale Supply chuyên thiết kế, sản xuất và lắp đặt đồ nội thất cho tất cả các loại phòng thí nghiệm khoa học. Chúng tôi cung cấp nhiều loại tủ, trạm làm việc, ghế dài đã được lắp ráp hoàn chỉnh và nhiều thứ khác, tất cả đều được sản xuất độc quyền tại cơ sở sản xuất của chúng tôi ở Dallas, Texas. Đồ nội thất phòng thí nghiệm của chúng tôi có sẵn với nhiều kích thước và cấu hình đa dạng để phù hợp với nhu cầu của bất kỳ ứng dụng nghiên cứu nào.<br><br>Doanh nghiệp của chúng tôi cung cấp các sản phẩm cũng như dịch vụ tư vấn thiết kế. Đối với các phòng thí nghiệm mới thành lập, chúng tôi có một nhóm chuyên gia tư vấn sẵn sàng đánh giá các nhu cầu cụ thể của cơ sở bạn và hỗ trợ bạn sắp xếp không gian cũng như lựa chọn đồ nội thất phù hợp nhất. Gần đây, ví dụ, chúng tôi đã được một nhà sản xuất nhiên liệu sinh học lớn lựa chọn để cung cấp trợ giúp chuyên môn trong việc thay đổi bố cục của một phòng thí nghiệm nghiên cứu để tối đa hóa không gian có sẵn. Kết quả của dự án này là khách hàng này đã tiết kiệm được khoản tiền đáng kể bằng cách giảm mức sử dụng năng lượng trong phòng thí nghiệm.<br><br>Vui lòng truy cập phần 'Lập kế hoạch Phòng thí nghiệm' trên trang web này nếu bạn muốn tìm hiểu thêm về việc xây dựng hoặc cải tạo một cơ sở phòng thí nghiệm. Tại đó, bạn có thể điền vào biểu mẫu quan tâm để liên hệ với một trong những nhà tư vấn của chúng tôi về dự án tiếp theo của bạn."
        }
      },
      { 
        text: "What method of communicating with Trexdale supply is mentioned?", 
        options: { A: "By e-mail", B: "By phone", C: "By instant message", D: "By an online form" }, 
        correct: "D", 
        explanation: {
          dan_chung: "visit the 'Lab Planning' section of this Web site... fill out an interest form to contact one of our consultants",
          ham_y: "Đoạn cuối hướng dẫn khách hàng nếu muốn biết thêm thông tin thì hãy truy cập website và điền vào một biểu mẫu đăng ký.<br>↳ <i>'fill out an interest form'</i> trên <i>'this Web site'</i> (điền biểu mẫu trên trang web này) = <i>'By an online form'</i> (Bằng một biểu mẫu trực tuyến).",
          lien_he: "Các cách thức liên lạc (contact methods) phổ biến trong TOEIC: 'visit website' = online; 'call / toll-free number' = by phone; 'drop by / in person' = trực tiếp; 'e-mail' = electronically.",
          tu_vung: [
            { tu: "specialize in", nghia: "chuyên về" },
            { tu: "assemble", nghia: "lắp ráp" },
            { tu: "configuration", nghia: "cấu hình, sự sắp xếp" },
            { tu: "substantial", nghia: "đáng kể, lớn" }
          ],
          dich_bai: "<b>Về Công ty Chúng tôi</b><br><br>Trexdale Supply chuyên thiết kế, sản xuất và lắp đặt đồ nội thất cho tất cả các loại phòng thí nghiệm khoa học. Chúng tôi cung cấp nhiều loại tủ, trạm làm việc, ghế dài đã được lắp ráp hoàn chỉnh và nhiều thứ khác, tất cả đều được sản xuất độc quyền tại cơ sở sản xuất của chúng tôi ở Dallas, Texas. Đồ nội thất phòng thí nghiệm của chúng tôi có sẵn với nhiều kích thước và cấu hình đa dạng để phù hợp với nhu cầu của bất kỳ ứng dụng nghiên cứu nào.<br><br>Doanh nghiệp của chúng tôi cung cấp các sản phẩm cũng như dịch vụ tư vấn thiết kế. Đối với các phòng thí nghiệm mới thành lập, chúng tôi có một nhóm chuyên gia tư vấn sẵn sàng đánh giá các nhu cầu cụ thể của cơ sở bạn và hỗ trợ bạn sắp xếp không gian cũng như lựa chọn đồ nội thất phù hợp nhất. Gần đây, ví dụ, chúng tôi đã được một nhà sản xuất nhiên liệu sinh học lớn lựa chọn để cung cấp trợ giúp chuyên môn trong việc thay đổi bố cục của một phòng thí nghiệm nghiên cứu để tối đa hóa không gian có sẵn. Kết quả của dự án này là khách hàng này đã tiết kiệm được khoản tiền đáng kể bằng cách giảm mức sử dụng năng lượng trong phòng thí nghiệm.<br><br>Vui lòng truy cập phần 'Lập kế hoạch Phòng thí nghiệm' trên trang web này nếu bạn muốn tìm hiểu thêm về việc xây dựng hoặc cải tạo một cơ sở phòng thí nghiệm. Tại đó, bạn có thể điền vào biểu mẫu quan tâm để liên hệ với một trong những nhà tư vấn của chúng tôi về dự án tiếp theo của bạn."
        }
      }
    ]
  }, // <--- Dấu phẩy chờ để dán chốt chặn cuối cùng (Phần 5)
// ==========================================
  // BÀI 41 (Turner & Co.)
  // ==========================================
  {
    category: "D. WEB PAGE",
    type: "Single Passage",
    texts: [
      "<b>Turner & Co.</b><br><br>Turner & Co. has produced beautiful, energy-efficient windows that meet the taste and expectations of our customers since its founding in 1949. When you choose Turner & Co., you are buying more than just a window. You will be receiving the excellent services of our professionals who have been performing superb work for decades. We are passionate about helping you choose a quality window that exactly fits the specifications of your home. Additionally, we are fully committed to environmental protection and have recently been recognized for our sustainable business practices by the Environmental Protection Agency (EPA)."
    ],
    questions: [
      { 
        text: "What is being advertised?", 
        options: { A: "An insurance company", B: "A window manufacturer", C: "A landscaping company", D: "A window cleaning service provider" }, 
        correct: "B", 
        explanation: {
          dan_chung: "produced beautiful, energy-efficient windows that meet the taste and expectations of our customers",
          ham_y: "Đoạn văn tự hào giới thiệu công ty đã sản xuất các loại cửa sổ đẹp và tiết kiệm năng lượng, chứng tỏ họ là một nhà sản xuất cửa sổ.<br>↳ <i>'produced... windows'</i> (sản xuất cửa sổ) = <i>'window manufacturer'</i> (nhà sản xuất cửa sổ).",
          lien_he: "Khi hỏi về ngành nghề kinh doanh (What is being advertised), hãy chú ý đến các động từ chỉ hành động sản xuất/cung cấp dịch vụ như 'produce', 'manufacture', 'provide', 'offer' nằm ở những câu đầu tiên.",
          tu_vung: [
            { tu: "energy-efficient", nghia: "tiết kiệm năng lượng" },
            { tu: "taste and expectations", nghia: "thị hiếu và kỳ vọng" },
            { tu: "superb", nghia: "tuyệt vời, xuất sắc" },
            { tu: "specification", nghia: "đặc điểm kỹ thuật" }
          ],
          dich_bai: "<b>Công ty Turner & Co.</b><br><br>Turner & Co. đã sản xuất các loại cửa sổ đẹp, tiết kiệm năng lượng, đáp ứng thị hiếu và kỳ vọng của khách hàng kể từ khi thành lập vào năm 1949. Khi bạn chọn Turner & Co., bạn đang mua nhiều hơn là chỉ một chiếc cửa sổ. Bạn sẽ nhận được các dịch vụ xuất sắc từ những chuyên gia của chúng tôi, những người đã thực hiện công việc tuyệt vời trong nhiều thập kỷ qua. Chúng tôi đam mê trong việc giúp bạn chọn ra một chiếc cửa sổ chất lượng hoàn toàn phù hợp với các thông số kỹ thuật ngôi nhà của bạn. Thêm vào đó, chúng tôi hoàn toàn cam kết bảo vệ môi trường và gần đây đã được Cơ quan Bảo vệ Môi trường (EPA) công nhận vì các hoạt động kinh doanh bền vững của chúng tôi."
        }
      },
      { 
        text: "What is indicated about Turner & Co.?", 
        options: { A: "It is a family-run business.", B: "Its branches are located nationwide.", C: "It is an eco-friendly company.", D: "It has recently hired experienced employees." }, 
        correct: "C", 
        explanation: {
          dan_chung: "fully committed to environmental protection and have recently been recognized for our sustainable business practices",
          ham_y: "Công ty cam kết bảo vệ môi trường và áp dụng các mô hình kinh doanh bền vững, nên được xem là một công ty thân thiện với môi trường.<br>↳ <i>'committed to environmental protection'</i> (cam kết bảo vệ môi trường) & <i>'sustainable business practices'</i> (thực tiễn kinh doanh bền vững) = <i>'an eco-friendly company'</i> (một công ty thân thiện với môi trường).",
          lien_he: "Các từ vựng về môi trường như 'environmental protection', 'sustainable', 'green', 'reduce emissions' luôn là dấu hiệu để chọn phương án chứa từ 'eco-friendly'.",
          tu_vung: [
            { tu: "energy-efficient", nghia: "tiết kiệm năng lượng" },
            { tu: "taste and expectations", nghia: "thị hiếu và kỳ vọng" },
            { tu: "superb", nghia: "tuyệt vời, xuất sắc" },
            { tu: "specification", nghia: "đặc điểm kỹ thuật" }
          ],
          dich_bai: "<b>Công ty Turner & Co.</b><br><br>Turner & Co. đã sản xuất các loại cửa sổ đẹp, tiết kiệm năng lượng, đáp ứng thị hiếu và kỳ vọng của khách hàng kể từ khi thành lập vào năm 1949. Khi bạn chọn Turner & Co., bạn đang mua nhiều hơn là chỉ một chiếc cửa sổ. Bạn sẽ nhận được các dịch vụ xuất sắc từ những chuyên gia của chúng tôi, những người đã thực hiện công việc tuyệt vời trong nhiều thập kỷ qua. Chúng tôi đam mê trong việc giúp bạn chọn ra một chiếc cửa sổ chất lượng hoàn toàn phù hợp với các thông số kỹ thuật ngôi nhà của bạn. Thêm vào đó, chúng tôi hoàn toàn cam kết bảo vệ môi trường và gần đây đã được Cơ quan Bảo vệ Môi trường (EPA) công nhận vì các hoạt động kinh doanh bền vững của chúng tôi."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 42 (Message Chain: Loading Dock B)
  // ==========================================
  {
    category: "E. MESSAGE CHAIN - CHAT DISCUSSION",
    type: "Single Passage",
    texts: [
      "<b>Greg Skagen (8:58 A.M.):</b> Hi, Brenda. I'm here in the warehouse. All of my trainees have arrived, but I noticed the power door at Loading Dock B is acting up.<br><b>Brenda Sadauskas (8:59 A.M.):</b> Again?<br><b>Greg Skagen (8:59 A.M.):</b> When I push the button to open it, it raises all the way up but then drops back down to the closed position after about 30 seconds.<br><b>Brenda Sadauskas (9:00 A.M.):</b> I'll come down with the maintenance technicians. Why don't you bring your trainees to my area? You can teach them how to create shipping labels and then have them pack and label this morning's shipments.<br><b>Greg Skagen (9:02 A.M.):</b> Yes, that works.<br><b>Brenda Sadauskas (9:03 A.M.):</b> Thanks. Then you could show them the loading dock operations in the afternoon."
    ],
    questions: [
      { 
        text: "What problem does Mr. Skagen mention?", 
        options: { A: "Some new employees are absent.", B: "Some boxes are incorrectly labeled.", C: "A package delivery is delayed.", D: "An access door is malfunctioning." }, 
        correct: "D", 
        explanation: {
          dan_chung: "noticed the power door at Loading Dock B is acting up... raises all the way up but then drops back down",
          ham_y: "Cửa tự động ở khu vực nhận hàng B đang bị lỗi (mở lên rồi lại tự động sập xuống).<br>↳ <i>'power door... is acting up'</i> (cửa tự động đang dở chứng) = <i>'An access door is malfunctioning'</i> (Một cửa ra vào đang bị lỗi chức năng).",
          lien_he: "Thành ngữ 'acting up' (dở chứng/không hoạt động đúng) được dùng rất phổ biến trong giao tiếp để nói về máy móc bị hỏng, đồng nghĩa với 'malfunctioning', 'not working properly', 'broken'.",
          tu_vung: [
            { tu: "trainee", nghia: "thực tập sinh, người được đào tạo" },
            { tu: "act up", nghia: "dở chứng, hoạt động không bình thường" },
            { tu: "shipping label", nghia: "nhãn dán vận chuyển" }
          ],
          dich_bai: "<b>Greg Skagen (8:58 Sáng):</b> Chào Brenda. Tôi đang ở nhà kho đây. Tất cả thực tập sinh của tôi đã đến, nhưng tôi nhận thấy cửa tự động ở Khu vực Chất hàng B đang dở chứng.<br><b>Brenda Sadauskas (8:59 Sáng):</b> Lại nữa sao?<br><b>Greg Skagen (8:59 Sáng):</b> Khi tôi nhấn nút để mở, nó nâng lên hết cỡ nhưng sau đó lại tụt xuống vị trí đóng sau khoảng 30 giây.<br><b>Brenda Sadauskas (9:00 Sáng):</b> Tôi sẽ đi xuống cùng các kỹ thuật viên bảo trì. Tại sao bạn không đưa thực tập sinh của bạn sang khu vực của tôi? Bạn có thể dạy họ cách tạo nhãn vận chuyển và sau đó cho họ đóng gói và dán nhãn các lô hàng sáng nay.<br><b>Greg Skagen (9:02 Sáng):</b> Vâng, điều đó ổn đấy.<br><b>Brenda Sadauskas (9:03 Sáng):</b> Cảm ơn. Sau đó, bạn có thể chỉ cho họ các hoạt động ở khu vực chất hàng vào buổi chiều."
        }
      },
      { 
        text: "At 9:02 A.M., what does Mr. Skagen most likely mean when he writes, 'Yes, that works'?", 
        options: { A: "An electrician has arrived at a work site.", B: "Some equipment is operating smoothly.", C: "Trainees can help with some shipments.", D: "Ms. Sadauskas is well suited for her job." }, 
        correct: "C", 
        explanation: {
          dan_chung: "Why don't you bring your trainees to my area? You can teach them... pack and label this morning's shipments. -> Yes, that works.",
          ham_y: "Greg đồng ý với đề xuất của Brenda về việc tạm thời đưa các thực tập sinh sang chỗ cô để phụ giúp việc đóng gói và dán nhãn các lô hàng trong khi chờ sửa cửa.<br>↳ Câu trước Brenda đề nghị <i>'have them [trainees] pack and label this morning's shipments'</i> (nhờ họ đóng gói và dán nhãn lô hàng) -> Greg đáp <i>'Yes, that works'</i> = Đồng ý rằng <i>'Trainees can help with some shipments'</i> (Thực tập sinh có thể giúp xử lý các lô hàng).",
          lien_he: "Dạng bài 'Implied Meaning' (Hàm ý câu nói). Cụm 'That works' hoặc 'That sounds good' dùng để biểu thị sự đồng ý (agreement/acceptance) với lời đề nghị vừa được đưa ra ở tin nhắn ngay trước đó.",
          tu_vung: [
            { tu: "trainee", nghia: "thực tập sinh, người được đào tạo" },
            { tu: "act up", nghia: "dở chứng, hoạt động không bình thường" },
            { tu: "shipping label", nghia: "nhãn dán vận chuyển" }
          ],
          dich_bai: "<b>Greg Skagen (8:58 Sáng):</b> Chào Brenda. Tôi đang ở nhà kho đây. Tất cả thực tập sinh của tôi đã đến, nhưng tôi nhận thấy cửa tự động ở Khu vực Chất hàng B đang dở chứng.<br><b>Brenda Sadauskas (8:59 Sáng):</b> Lại nữa sao?<br><b>Greg Skagen (8:59 Sáng):</b> Khi tôi nhấn nút để mở, nó nâng lên hết cỡ nhưng sau đó lại tụt xuống vị trí đóng sau khoảng 30 giây.<br><b>Brenda Sadauskas (9:00 Sáng):</b> Tôi sẽ đi xuống cùng các kỹ thuật viên bảo trì. Tại sao bạn không đưa thực tập sinh của bạn sang khu vực của tôi? Bạn có thể dạy họ cách tạo nhãn vận chuyển và sau đó cho họ đóng gói và dán nhãn các lô hàng sáng nay.<br><b>Greg Skagen (9:02 Sáng):</b> Vâng, điều đó ổn đấy.<br><b>Brenda Sadauskas (9:03 Sáng):</b> Cảm ơn. Sau đó, bạn có thể chỉ cho họ các hoạt động ở khu vực chất hàng vào buổi chiều."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 43 (Message Chain: Finance & Marketing)
  // ==========================================
  {
    category: "E. MESSAGE CHAIN - CHAT DISCUSSION",
    type: "Single Passage",
    texts: [
      "<b>Ella Glatt (11:34 A.M.):</b> Hi. I know this is a busy day, but I wanted to know whether anyone from the finance team could come to the marketing meeting.<br><b>Stef Goldberg (11:35 A.M.):</b> Hi, Ella. I wish I could, but it starts at 2:00. I need to be at a different meeting at 2:30.<br><b>Ella Glatt (11:36 A.M.):</b> Oh, right. I forgot you were going to the executive board meeting.<br><b>Bill Iverman (11:38 A.M.):</b> The quarterly reports just came in, and Daniel, Stef, and I need to review them by the end of the day.<br><b>Daniel Seidel (11:41 A.M.):</b> That's true! But I could come from 2:00 to 2:15. That's all I can commit to.<br><b>Ella Glatt (11:43 A.M.):</b> Sounds great. We just need one of you to clarify a few quick points about the budget for the next advertising campaign."
    ],
    questions: [
      { 
        text: "In what area does Mr. Iverman most likely work?", 
        options: { A: "Marketing", B: "Finance", C: "Advertising", D: "Executive management" }, 
        correct: "B", 
        explanation: {
          dan_chung: "wanted to know whether anyone from the finance team could come... Bill Iverman: The quarterly reports just came in, and Daniel, Stef, and I need to review them",
          ham_y: "Ella đang hỏi xem có ai bên nhóm 'Tài chính' rảnh không. Ngay sau đó Bill lên tiếng giải thích rằng nhóm của anh ấy (gồm cả anh) đang bận xem xét báo cáo quý. Suy ra Bill thuộc phòng Tài chính.<br>↳ Ella gọi nhóm <i>'finance team'</i> -> Bill trả lời bằng cách nêu lý do bận <i>'review quarterly reports'</i> cùng những người khác -> Suy ra Bill thuộc bộ phận <i>'Finance'</i> (Tài chính).",
          lien_he: "Dạng bài nhóm chat nhiều người (Group Chat). Bạn phải theo dõi mạch câu chuyện. Nếu A hỏi 'Phòng Kế toán đâu?' và B lên tiếng đáp lời, thì B gần như chắc chắn thuộc Phòng Kế toán.",
          tu_vung: [
            { tu: "executive board", nghia: "hội đồng quản trị/điều hành" },
            { tu: "quarterly report", nghia: "báo cáo hàng quý" },
            { tu: "commit to", nghia: "cam kết làm gì đó" },
            { tu: "clarify", nghia: "làm rõ" }
          ],
          dich_bai: "<b>Ella Glatt (11:34 Sáng):</b> Chào mọi người. Tôi biết hôm nay là một ngày bận rộn, nhưng tôi muốn biết liệu có ai từ nhóm tài chính có thể tham gia cuộc họp tiếp thị không.<br><b>Stef Goldberg (11:35 Sáng):</b> Chào, Ella. Tôi ước gì tôi có thể, nhưng nó bắt đầu lúc 2:00. Tôi cần phải có mặt ở một cuộc họp khác lúc 2:30.<br><b>Ella Glatt (11:36 Sáng):</b> Ồ, đúng rồi. Tôi quên mất bạn sẽ tham gia cuộc họp ban điều hành.<br><b>Bill Iverman (11:38 Sáng):</b> Các báo cáo hàng quý vừa mới được gửi đến, và Daniel, Stef và tôi cần xem xét chúng trước khi ngày làm việc kết thúc.<br><b>Daniel Seidel (11:41 Sáng):</b> Đúng vậy! Nhưng tôi có thể ghé qua từ 2:00 đến 2:15. Đó là tất cả những gì tôi có thể sắp xếp được.<br><b>Ella Glatt (11:43 Sáng):</b> Nghe tuyệt đấy. Chúng tôi chỉ cần một người trong số các bạn để làm rõ một vài điểm nhanh về ngân sách cho chiến dịch quảng cáo tiếp theo."
        }
      },
      { 
        text: "Why does Ms. Glatt want a colleague to attend a meeting?", 
        options: { A: "To summarize a previous meeting", B: "To explain a promotional campaign", C: "To provide information about a budget", D: "To review recently approved documents" }, 
        correct: "C", 
        explanation: {
          dan_chung: "We just need one of you to clarify a few quick points about the budget",
          ham_y: "Ella chỉ cần một người hiểu biết về tài chính đến cuộc họp để giải thích rõ ràng một số thắc mắc liên quan đến ngân sách dự kiến.<br>↳ <i>'clarify a few quick points about the budget'</i> (làm rõ vài điểm về ngân sách) = <i>'provide information about a budget'</i> (cung cấp thông tin về một ngân sách).",
          lien_he: "Động từ 'clarify' (làm sáng tỏ/làm rõ) đồng nghĩa với 'explain' (giải thích) hoặc 'provide information' (cung cấp thông tin).",
          tu_vung: [
            { tu: "executive board", nghia: "hội đồng quản trị/điều hành" },
            { tu: "quarterly report", nghia: "báo cáo hàng quý" },
            { tu: "commit to", nghia: "cam kết làm gì đó" },
            { tu: "clarify", nghia: "làm rõ" }
          ],
          dich_bai: "<b>Ella Glatt (11:34 Sáng):</b> Chào mọi người. Tôi biết hôm nay là một ngày bận rộn, nhưng tôi muốn biết liệu có ai từ nhóm tài chính có thể tham gia cuộc họp tiếp thị không.<br><b>Stef Goldberg (11:35 Sáng):</b> Chào, Ella. Tôi ước gì tôi có thể, nhưng nó bắt đầu lúc 2:00. Tôi cần phải có mặt ở một cuộc họp khác lúc 2:30.<br><b>Ella Glatt (11:36 Sáng):</b> Ồ, đúng rồi. Tôi quên mất bạn sẽ tham gia cuộc họp ban điều hành.<br><b>Bill Iverman (11:38 Sáng):</b> Các báo cáo hàng quý vừa mới được gửi đến, và Daniel, Stef và tôi cần xem xét chúng trước khi ngày làm việc kết thúc.<br><b>Daniel Seidel (11:41 Sáng):</b> Đúng vậy! Nhưng tôi có thể ghé qua từ 2:00 đến 2:15. Đó là tất cả những gì tôi có thể sắp xếp được.<br><b>Ella Glatt (11:43 Sáng):</b> Nghe tuyệt đấy. Chúng tôi chỉ cần một người trong số các bạn để làm rõ một vài điểm nhanh về ngân sách cho chiến dịch quảng cáo tiếp theo."
        }
      },
      { 
        text: "At 11:43 A.M., what does Ms. Glatt most likely mean when she writes, 'Sounds great'?", 
        options: { A: "She accepts Mr. Seidel's offer.", B: "She agrees that Mr. Iverman should attend the meeting at 3:00.", C: "She is pleased with the proposed budget.", D: "She is happy that a project has been completed." }, 
        correct: "A", 
        explanation: {
          dan_chung: "Daniel: But I could come from 2:00 to 2:15... -> Ella: Sounds great.",
          ham_y: "Khi Daniel đề nghị có thể ghé qua họp trong vòng 15 phút, Ella đã đáp 'Sounds great' để biểu lộ sự đồng ý và hài lòng với lời đề xuất này.<br>↳ Lời đề nghị của Daniel <i>'I could come from 2:00 to 2:15'</i> -> Sự đồng ý của Ella <i>'Sounds great'</i> = <i>'She accepts Mr. Seidel's offer'</i> (Cô ấy chấp nhận lời đề nghị).",
          lien_he: "Tương tự bài trước (Yes, that works), mẫu câu cảm thán như 'Sounds great' dùng để chốt lại một cuộc thương lượng/đề nghị trong đoạn chat.",
          tu_vung: [
            { tu: "executive board", nghia: "hội đồng quản trị/điều hành" },
            { tu: "quarterly report", nghia: "báo cáo hàng quý" },
            { tu: "commit to", nghia: "cam kết làm gì đó" },
            { tu: "clarify", nghia: "làm rõ" }
          ],
          dich_bai: "<b>Ella Glatt (11:34 Sáng):</b> Chào mọi người. Tôi biết hôm nay là một ngày bận rộn, nhưng tôi muốn biết liệu có ai từ nhóm tài chính có thể tham gia cuộc họp tiếp thị không.<br><b>Stef Goldberg (11:35 Sáng):</b> Chào, Ella. Tôi ước gì tôi có thể, nhưng nó bắt đầu lúc 2:00. Tôi cần phải có mặt ở một cuộc họp khác lúc 2:30.<br><b>Ella Glatt (11:36 Sáng):</b> Ồ, đúng rồi. Tôi quên mất bạn sẽ tham gia cuộc họp ban điều hành.<br><b>Bill Iverman (11:38 Sáng):</b> Các báo cáo hàng quý vừa mới được gửi đến, và Daniel, Stef và tôi cần xem xét chúng trước khi ngày làm việc kết thúc.<br><b>Daniel Seidel (11:41 Sáng):</b> Đúng vậy! Nhưng tôi có thể ghé qua từ 2:00 đến 2:15. Đó là tất cả những gì tôi có thể sắp xếp được.<br><b>Ella Glatt (11:43 Sáng):</b> Nghe tuyệt đấy. Chúng tôi chỉ cần một người trong số các bạn để làm rõ một vài điểm nhanh về ngân sách cho chiến dịch quảng cáo tiếp theo."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 44 (Message Chain: Jack's Farewell)
  // ==========================================
  {
    category: "E. MESSAGE CHAIN - CHAT DISCUSSION",
    type: "Single Passage",
    texts: [
      "<b>Teleshia Thomas (8:12 A.M.):</b> Laura, are you in the office already or still on your way in? I have a favor to ask.<br><b>Laura Penn (8:14 A.M.):</b> I'm here.<br><b>Teleshia Thomas (8:16 A.M.):</b> It's Jack's farewell breakfast this morning. I have juice, coffee, fruit, and pastries with me, but I haven't passed around cards for colleagues to sign to wish him well. Do you think you could do that? There are some cards on my desk.<br><b>Laura Penn (8:18 A.M.):</b> Actually, I can send out an e-mail and ask staff to go into your office to sign the cards. I'll arrange them on the round table in the corner. I'll do that straightaway."
    ],
    questions: [
      { 
        text: "At 8:14 A.M., what does Ms. Penn most likely mean when she writes, 'I'm here'?", 
        options: { A: "She is paying attention.", B: "She is in the same room as Ms. Thomas.", C: "She is waiting for Ms. Thomas to arrive.", D: "She is already at the office." }, 
        correct: "D", 
        explanation: {
          dan_chung: "Teleshia: are you in the office already or still on your way in? -> Laura: I'm here.",
          ham_y: "Để trả lời cho câu hỏi có 2 vế 'đã đến văn phòng chưa hay đang đi trên đường', câu trả lời 'Tôi ở đây rồi' mang ý nghĩa là cô ấy đã tới nơi làm việc.<br>↳ Trả lời cho câu hỏi <i>'are you in the office already...?'</i> (bạn đã ở văn phòng chưa?) = <i>'She is already at the office'</i>.",
          lien_he: "Dạng bài 'Hàm ý câu nói'. Chú ý đến không gian giao tiếp. 'Here' (ở đây) trong ngữ cảnh đi làm sáng sớm chắc chắn dùng để chỉ 'The office' (văn phòng).",
          tu_vung: [
            { tu: "farewell", nghia: "lời chào tạm biệt (tiệc chia tay)" },
            { tu: "pastry", nghia: "bánh ngọt" },
            { tu: "pass around", nghia: "chuyền tay nhau" },
            { tu: "straightaway", nghia: "ngay lập tức" }
          ],
          dich_bai: "<b>Teleshia Thomas (8:12 Sáng):</b> Laura, bạn đã đến văn phòng chưa hay vẫn đang trên đường đi? Tôi có việc muốn nhờ.<br><b>Laura Penn (8:14 Sáng):</b> Tôi tới nơi rồi.<br><b>Teleshia Thomas (8:16 Sáng):</b> Sáng nay là bữa sáng chia tay Jack. Tôi đã chuẩn bị sẵn nước ép, cà phê, trái cây và bánh ngọt, nhưng tôi chưa kịp chuyền tay các tấm thiệp cho đồng nghiệp ký để gửi lời chúc tốt đẹp đến anh ấy. Bạn có thể giúp tôi việc đó được không? Có vài tấm thiệp trên bàn làm việc của tôi đấy.<br><b>Laura Penn (8:18 Sáng):</b> Thật ra, tôi có thể gửi một email và bảo nhân viên vào văn phòng của bạn để ký thiệp. Tôi sẽ sắp xếp chúng trên chiếc bàn tròn ở trong góc. Tôi sẽ làm việc đó ngay lập tức."
        }
      },
      { 
        text: "What will Ms. Penn most likely do next?", 
        options: { A: "Give a presentation", B: "Postpone a meeting", C: "Put cards on a table", D: "Arrange seats in a staff room" }, 
        correct: "C", 
        explanation: {
          dan_chung: "I'll arrange them [the cards] on the round table in the corner. I'll do that straightaway.",
          ham_y: "Laura sẽ lấy những tấm thiệp và trải chúng ra trên bàn tròn để mọi người dễ dàng ký tên.<br>↳ <i>'arrange them [cards] on the round table'</i> (sắp xếp thiệp lên bàn tròn) = <i>'Put cards on a table'</i> (Đặt thiệp lên một chiếc bàn).",
          lien_he: "Đại từ 'them' trong câu cuối thay thế cho danh từ 'cards' ở ngay phía trước nó.",
          tu_vung: [
            { tu: "farewell", nghia: "lời chào tạm biệt (tiệc chia tay)" },
            { tu: "pastry", nghia: "bánh ngọt" },
            { tu: "pass around", nghia: "chuyền tay nhau" },
            { tu: "straightaway", nghia: "ngay lập tức" }
          ],
          dich_bai: "<b>Teleshia Thomas (8:12 Sáng):</b> Laura, bạn đã đến văn phòng chưa hay vẫn đang trên đường đi? Tôi có việc muốn nhờ.<br><b>Laura Penn (8:14 Sáng):</b> Tôi tới nơi rồi.<br><b>Teleshia Thomas (8:16 Sáng):</b> Sáng nay là bữa sáng chia tay Jack. Tôi đã chuẩn bị sẵn nước ép, cà phê, trái cây và bánh ngọt, nhưng tôi chưa kịp chuyền tay các tấm thiệp cho đồng nghiệp ký để gửi lời chúc tốt đẹp đến anh ấy. Bạn có thể giúp tôi việc đó được không? Có vài tấm thiệp trên bàn làm việc của tôi đấy.<br><b>Laura Penn (8:18 Sáng):</b> Thật ra, tôi có thể gửi một email và bảo nhân viên vào văn phòng của bạn để ký thiệp. Tôi sẽ sắp xếp chúng trên chiếc bàn tròn ở trong góc. Tôi sẽ làm việc đó ngay lập tức."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 45 (Message Chain: Meeting Rescheduled)
  // ==========================================
  {
    category: "E. MESSAGE CHAIN - CHAT DISCUSSION",
    type: "Single Passage",
    texts: [
      "<b>Sandra Kyle (8:19 A.M.):</b> Good morning. I'm on my way but running late because of a lane closure on Roseway Boulevard. It's all backed up, and the bus is barely moving.<br><b>Carolina Mata (8:23 A.M.):</b> Wait, haven't you heard? The meeting was moved to Thursday.<br><b>Sandra Kyle (8:24 A.M.):</b> Really? What a relief.<br><b>Carolina Mata (8:26 A.M.):</b> Mr. Chang is in Porteville meeting with the client about the final design for the new warehouse building. He won't be back until tomorrow.<br><b>Lucas Bodin (8:30 A.M.):</b> The client requested some last-minute changes, so Mr. Chang is away longer than expected. Hopefully the changes are minor, because we're already over the allocated budget."
    ],
    questions: [
      { 
        text: "Why does Ms. Kyle expect to be late for work?", 
        options: { A: "The bus is slow because of poor weather.", B: "The bus is stuck in traffic.", C: "She missed the bus.", D: "The bus arrived late at her stop." }, 
        correct: "B", 
        explanation: {
          dan_chung: "lane closure on Roseway Boulevard. It's all backed up, and the bus is barely moving.",
          ham_y: "Việc một làn đường bị phong tỏa đã gây ra tình trạng ùn tắc giao thông, khiến chiếc xe buýt của Sandra gần như đứng im một chỗ.<br>↳ <i>'lane closure'</i> (đóng làn đường) + <i>'all backed up'</i> (tắc nghẽn) + <i>'bus is barely moving'</i> (xe buýt khó nhúc nhích) = <i>'stuck in traffic'</i> (bị kẹt xe).",
          lien_he: "Các nguyên nhân gây trễ giờ phổ biến: 'heavy traffic / traffic jam / congestion' (kẹt xe), 'weather conditions / heavy rain' (thời tiết), 'missed the train/bus' (lỡ chuyến).",
          tu_vung: [
            { tu: "lane closure", nghia: "sự đóng làn đường" },
            { tu: "backed up", nghia: "bị ùn tắc, kẹt (xe)" },
            { tu: "relief", nghia: "sự nhẹ nhõm" },
            { tu: "allocated", nghia: "được phân bổ" }
          ],
          dich_bai: "<b>Sandra Kyle (8:19 Sáng):</b> Chào buổi sáng. Tôi đang trên đường đi nhưng bị muộn do đóng một làn đường trên Đại lộ Roseway. Đường bị ùn tắc hết, và xe buýt gần như không nhúc nhích.<br><b>Carolina Mata (8:23 Sáng):</b> Khoan đã, bạn chưa nghe tin gì sao? Cuộc họp đã được dời sang thứ Năm rồi.<br><b>Sandra Kyle (8:24 Sáng):</b> Thật sao? Thật là nhẹ nhõm.<br><b>Carolina Mata (8:26 Sáng):</b> Ông Chang đang ở Porteville để họp với khách hàng về thiết kế cuối cùng cho tòa nhà kho mới. Ông ấy sẽ không trở lại cho đến ngày mai.<br><b>Lucas Bodin (8:30 Sáng):</b> Khách hàng yêu cầu một số thay đổi vào phút chót, vì vậy ông Chang phải đi vắng lâu hơn dự kiến. Hy vọng những thay đổi này chỉ là nhỏ, bởi vì chúng ta đã vượt quá ngân sách được phân bổ rồi."
        }
      },
      { 
        text: "At 8:24 A.M., what does Ms. Kyle most likely mean when she writes, 'Really'?", 
        options: { A: "She is disappointed by certain designs.", B: "She disagrees with the decision.", C: "She is surprised by Ms. Mata's comment.", D: "She already heard the news." }, 
        correct: "C", 
        explanation: {
          dan_chung: "Carolina: The meeting was moved to Thursday. -> Sandra: Really? What a relief.",
          ham_y: "Sandra đang lo sợ bị trễ họp thì Carolina bất ngờ thông báo cuộc họp đã bị hủy. Câu cảm thán 'Thật sao?' bộc lộ sự ngạc nhiên và vui mừng của cô ấy.<br>↳ Biểu cảm <i>'Really? What a relief'</i> (Thật sao? Thật nhẹ nhõm) trước thông tin mới = <i>'She is surprised'</i> (Cô ấy bị ngạc nhiên).",
          lien_he: "Dạng câu hỏi về 'Hàm ý câu nói'. Chú ý đến ngữ điệu, 'Really?' với dấu chấm hỏi biểu thị sự ngạc nhiên tột độ (surprised) đối với một thông tin chưa từng biết trước đó.",
          tu_vung: [
            { tu: "lane closure", nghia: "sự đóng làn đường" },
            { tu: "backed up", nghia: "bị ùn tắc, kẹt (xe)" },
            { tu: "relief", nghia: "sự nhẹ nhõm" },
            { tu: "allocated", nghia: "được phân bổ" }
          ],
          dich_bai: "<b>Sandra Kyle (8:19 Sáng):</b> Chào buổi sáng. Tôi đang trên đường đi nhưng bị muộn do đóng một làn đường trên Đại lộ Roseway. Đường bị ùn tắc hết, và xe buýt gần như không nhúc nhích.<br><b>Carolina Mata (8:23 Sáng):</b> Khoan đã, bạn chưa nghe tin gì sao? Cuộc họp đã được dời sang thứ Năm rồi.<br><b>Sandra Kyle (8:24 Sáng):</b> Thật sao? Thật là nhẹ nhõm.<br><b>Carolina Mata (8:26 Sáng):</b> Ông Chang đang ở Porteville để họp với khách hàng về thiết kế cuối cùng cho tòa nhà kho mới. Ông ấy sẽ không trở lại cho đến ngày mai.<br><b>Lucas Bodin (8:30 Sáng):</b> Khách hàng yêu cầu một số thay đổi vào phút chót, vì vậy ông Chang phải đi vắng lâu hơn dự kiến. Hy vọng những thay đổi này chỉ là nhỏ, bởi vì chúng ta đã vượt quá ngân sách được phân bổ rồi."
        }
      },
      { 
        text: "What is indicated about the project?", 
        options: { A: "It is more expensive than planned.", B: "It has some technical difficulties.", C: "It has been poorly managed.", D: "It cannot be completed on time." }, 
        correct: "A", 
        explanation: {
          dan_chung: "we're already over the allocated budget",
          ham_y: "Việc thay đổi thiết kế khiến dự án hiện tại đã tiêu tốn nhiều tiền hơn số quỹ dự kiến ban đầu dành cho nó.<br>↳ <i>'over the allocated budget'</i> (vượt quá ngân sách được phân bổ) = <i>'more expensive than planned'</i> (đắt đỏ hơn so với kế hoạch).",
          lien_he: "Trong TOEIC, cụm từ 'over budget' (vượt ngân sách) đồng nghĩa với 'cost more money', 'more expensive', hoặc 'exceed estimates'. Trái nghĩa là 'under budget' (tiết kiệm hơn dự kiến).",
          tu_vung: [
            { tu: "lane closure", nghia: "sự đóng làn đường" },
            { tu: "backed up", nghia: "bị ùn tắc, kẹt (xe)" },
            { tu: "relief", nghia: "sự nhẹ nhõm" },
            { tu: "allocated", nghia: "được phân bổ" }
          ],
          dich_bai: "<b>Sandra Kyle (8:19 Sáng):</b> Chào buổi sáng. Tôi đang trên đường đi nhưng bị muộn do đóng một làn đường trên Đại lộ Roseway. Đường bị ùn tắc hết, và xe buýt gần như không nhúc nhích.<br><b>Carolina Mata (8:23 Sáng):</b> Khoan đã, bạn chưa nghe tin gì sao? Cuộc họp đã được dời sang thứ Năm rồi.<br><b>Sandra Kyle (8:24 Sáng):</b> Thật sao? Thật là nhẹ nhõm.<br><b>Carolina Mata (8:26 Sáng):</b> Ông Chang đang ở Porteville để họp với khách hàng về thiết kế cuối cùng cho tòa nhà kho mới. Ông ấy sẽ không trở lại cho đến ngày mai.<br><b>Lucas Bodin (8:30 Sáng):</b> Khách hàng yêu cầu một số thay đổi vào phút chót, vì vậy ông Chang phải đi vắng lâu hơn dự kiến. Hy vọng những thay đổi này chỉ là nhỏ, bởi vì chúng ta đã vượt quá ngân sách được phân bổ rồi."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 46 (Message Chain: The Miller File)
  // ==========================================
  {
    category: "E. MESSAGE CHAIN - CHAT DISCUSSION",
    type: "Single Passage",
    texts: [
      "<b>Lucy O'Malley (1:36 P.M.):</b> I am at the office, but I can't find the Miller file anywhere.<br><b>Stanley Hamstead (1:37 P.M.):</b> Did you check in the future projects file cabinet?<br><b>Lucy O'Malley (1:39 P.M.):</b> No luck. Any other ideas?<br><b>Stanley Hamstead (1:40 P.M.):</b> I bet it is in Charles Wada's office. Check on his desk and let me know.<br><b>Lucy O'Malley (1:47 P.M.):</b> Got it! How would you like me to get this to you?<br><b>Stanley Hamstead (1:48 P.M.):</b> Would it be too much to ask you to deliver it? We need the original documents with signatures. Please get here as soon as you can.<br><b>Lucy O'Malley (1:50 P.M.):</b> Not a problem. I'll take a taxi."
    ],
    questions: [
      { 
        text: "At 1:39 P.M., what does Ms. O'Malley most likely mean when she writes, 'No luck'?", 
        options: { A: "She does not support a future project.", B: "She is unsure where a coworker's office is.", C: "She was unable to find something.", D: "She needs more instruction from Mr. Wada." }, 
        correct: "C", 
        explanation: {
          dan_chung: "Stanley: Did you check in the future projects file cabinet? -> Lucy: No luck. Any other ideas?",
          ham_y: "Cụm từ 'No luck' (Không may mắn/Không có kết quả) được Lucy sử dụng sau khi làm theo lời khuyên tìm kiếm tài liệu ở tủ hồ sơ nhưng vẫn không thấy.<br>↳ Câu hỏi <i>'Did you check...?'</i> (Bạn đã kiểm tra chưa) + Trả lời <i>'No luck'</i> (Không may mắn/Không thấy) = <i>'She was unable to find something'</i> (Cô ấy không thể tìm thấy một thứ gì đó).",
          lien_he: "Dạng bài 'Hàm ý câu nói'. Các cụm từ như 'No luck', 'Not yet', 'I couldn't find it' mang ý nghĩa thông báo một sự thất bại hoặc không thành công trong việc tìm kiếm.",
          tu_vung: [
            { tu: "file cabinet", nghia: "tủ đựng hồ sơ" },
            { tu: "no luck", nghia: "không may mắn, không có kết quả" },
            { tu: "deliver", nghia: "giao hàng, chuyển phát" }
          ],
          dich_bai: "<b>Lucy O'Malley (1:36 Chiều):</b> Tôi đang ở văn phòng, nhưng tôi không thể tìm thấy hồ sơ Miller ở đâu cả.<br><b>Stanley Hamstead (1:37 Chiều):</b> Bạn đã kiểm tra trong tủ hồ sơ các dự án tương lai chưa?<br><b>Lucy O'Malley (1:39 Chiều):</b> Không có kết quả. Còn ý tưởng nào khác không?<br><b>Stanley Hamstead (1:40 Chiều):</b> Tôi cá là nó ở trong văn phòng của Charles Wada. Hãy kiểm tra trên bàn làm việc của anh ấy và cho tôi biết.<br><b>Lucy O'Malley (1:47 Chiều):</b> Thấy rồi! Bạn muốn tôi mang cái này đến cho bạn như thế nào?<br><b>Stanley Hamstead (1:48 Chiều):</b> Tôi có quá đáng không nếu nhờ bạn giao nó? Chúng tôi cần các tài liệu gốc có chữ ký. Vui lòng đến đây càng sớm càng tốt.<br><b>Lucy O'Malley (1:50 Chiều):</b> Không thành vấn đề. Tôi sẽ bắt một chiếc taxi."
        }
      },
      { 
        text: "What will Ms. O'Malley probably do next?", 
        options: { A: "E-mail some documents.", B: "Call a courier service.", C: "Deliver some documents herself.", D: "Contact Mr. Wada." }, 
        correct: "C", 
        explanation: {
          dan_chung: "Stanley: Would it be too much to ask you to deliver it? ... -> Lucy: Not a problem. I'll take a taxi.",
          ham_y: "Khi Stanley nhờ Lucy đích thân đi giao tài liệu gốc, cô ấy đã đồng ý và nói rằng sẽ bắt taxi để đi.<br>↳ Cụm <i>'ask you to deliver it'</i> (yêu cầu bạn đi giao nó) + <i>'I'll take a taxi'</i> (Tôi sẽ bắt taxi đi) = <i>'Deliver some documents herself'</i> (Tự tay cô ấy đi giao tài liệu).",
          lien_he: "Chú ý vào từ 'herself' (tự tay cô ấy làm). Việc đi taxi mang hồ sơ đến chứng tỏ cô ấy không sử dụng dịch vụ bưu điện (courier service) hay gửi qua mạng (e-mail).",
          tu_vung: [
            { tu: "file cabinet", nghia: "tủ đựng hồ sơ" },
            { tu: "no luck", nghia: "không may mắn, không có kết quả" },
            { tu: "deliver", nghia: "giao hàng, chuyển phát" }
          ],
          dich_bai: "<b>Lucy O'Malley (1:36 Chiều):</b> Tôi đang ở văn phòng, nhưng tôi không thể tìm thấy hồ sơ Miller ở đâu cả.<br><b>Stanley Hamstead (1:37 Chiều):</b> Bạn đã kiểm tra trong tủ hồ sơ các dự án tương lai chưa?<br><b>Lucy O'Malley (1:39 Chiều):</b> Không có kết quả. Còn ý tưởng nào khác không?<br><b>Stanley Hamstead (1:40 Chiều):</b> Tôi cá là nó ở trong văn phòng của Charles Wada. Hãy kiểm tra trên bàn làm việc của anh ấy và cho tôi biết.<br><b>Lucy O'Malley (1:47 Chiều):</b> Thấy rồi! Bạn muốn tôi mang cái này đến cho bạn như thế nào?<br><b>Stanley Hamstead (1:48 Chiều):</b> Tôi có quá đáng không nếu nhờ bạn giao nó? Chúng tôi cần các tài liệu gốc có chữ ký. Vui lòng đến đây càng sớm càng tốt.<br><b>Lucy O'Malley (1:50 Chiều):</b> Không thành vấn đề. Tôi sẽ bắt một chiếc taxi."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 47 (Message Chain: Signboard)
  // ==========================================
  {
    category: "E. MESSAGE CHAIN - CHAT DISCUSSION",
    type: "Single Passage",
    texts: [
      "<b>Joanne Matos (11:45 A.M.):</b> Tuyet and Jim, do you know where I can find that big signboard—the one that we usually post at the entrance to advertise when we're having a sale inside?<br><b>Tuyet Nguyen (11:58 A.M.):</b> I haven't seen it lately. Why?<br><b>Joanne Matos (11:59 A.M.):</b> I'm setting up for this afternoon's party under the tent out in the café courtyard, and I want to have seating information posted for people as they arrive.<br><b>Jim Thomas (12:02 P.M.):</b> No, I'm not! I'm out making a delivery right now, but I'll be back soon. You can find the signboard in the alcove just inside our building's delivery entrance. Just put it back when you're done so that I can find it the next time I need it.<br><b>Joanne Matos (12:04 P.M.):</b> No problem. Thanks!"
    ],
    questions: [
      { 
        text: "Why did Ms. Matos begin the text-message chain?", 
        options: { A: "She needs help locating something.", B: "She is wondering what time Mr. Thomas will arrive.", C: "She wants to know why the tent is up today.", D: "She wants help putting up decorations." }, 
        correct: "A", 
        explanation: {
          dan_chung: "Joanne: do you know where I can find that big signboard...?",
          ham_y: "Joanne bắt đầu cuộc trò chuyện để hỏi xem có ai biết tấm biển hiệu lớn thường để trước cửa đang nằm ở đâu không.<br>↳ <i>'do you know where I can find...'</i> (bạn có biết tìm... ở đâu không) = <i>'She needs help locating something'</i> (Cô ấy cần giúp tìm vị trí của một thứ gì đó).",
          lien_he: "Mục đích của việc bắt đầu một đoạn tin nhắn/email thường nằm ngay ở câu mở đầu. Động từ 'find' (tìm kiếm) rất thường được paraphrase thành 'locate' (xác định vị trí).",
          tu_vung: [
            { tu: "signboard", nghia: "biển báo, bảng hiệu" },
            { tu: "courtyard", nghia: "sân trong" },
            { tu: "alcove", nghia: "hốc tường, khu vực lõm vào" },
            { tu: "original location", nghia: "vị trí ban đầu" }
          ],
          dich_bai: "<b>Joanne Matos (11:45 Sáng):</b> Tuyet và Jim, các bạn có biết tôi có thể tìm thấy tấm biển báo lớn đó ở đâu không—cái mà chúng ta thường dán ở lối vào để quảng cáo khi có chương trình giảm giá bên trong ấy?<br><b>Tuyet Nguyen (11:58 Sáng):</b> Gần đây tôi không thấy nó. Sao vậy?<br><b>Joanne Matos (11:59 Sáng):</b> Tôi đang chuẩn bị cho bữa tiệc chiều nay dưới túp lều ngoài sân trong của quán cà phê, và tôi muốn dán thông tin chỗ ngồi cho mọi người khi họ đến.<br><b>Jim Thomas (12:02 Chiều):</b> Không, tôi không thấy! Tôi đang đi giao hàng, nhưng tôi sẽ quay lại sớm. Bạn có thể tìm thấy tấm biển báo trong hốc tường ngay bên trong lối vào giao hàng của tòa nhà chúng ta. Chỉ cần đặt nó lại chỗ cũ khi bạn dùng xong để tôi có thể tìm thấy nó vào lần tới khi cần.<br><b>Joanne Matos (12:04 Chiều):</b> Không thành vấn đề. Cảm ơn nhé!"
        }
      },
      { 
        text: "Where is Mr. Thomas most likely texting from?", 
        options: { A: "The tent", B: "The building entrance", C: "His home", D: "A delivery site" }, 
        correct: "D", 
        explanation: {
          dan_chung: "Jim Thomas: I'm out making a delivery right now, but I'll be back soon.",
          ham_y: "Jim cho biết anh ấy đang không có ở công ty vì đang đi thực hiện việc giao hàng.<br>↳ <i>'out making a delivery'</i> (đang ra ngoài đi giao hàng) = <i>'A delivery site'</i> (Một địa điểm giao hàng).",
          lien_he: "Dạng câu hỏi suy luận về địa điểm (Where). Hãy tìm các cụm từ chỉ hoạt động của người đó vào thời điểm hiện tại ('right now', 'at the moment').",
          tu_vung: [
            { tu: "signboard", nghia: "biển báo, bảng hiệu" },
            { tu: "courtyard", nghia: "sân trong" },
            { tu: "alcove", nghia: "hốc tường, khu vực lõm vào" },
            { tu: "original location", nghia: "vị trí ban đầu" }
          ],
          dich_bai: "<b>Joanne Matos (11:45 Sáng):</b> Tuyet và Jim, các bạn có biết tôi có thể tìm thấy tấm biển báo lớn đó ở đâu không—cái mà chúng ta thường dán ở lối vào để quảng cáo khi có chương trình giảm giá bên trong ấy?<br><b>Tuyet Nguyen (11:58 Sáng):</b> Gần đây tôi không thấy nó. Sao vậy?<br><b>Joanne Matos (11:59 Sáng):</b> Tôi đang chuẩn bị cho bữa tiệc chiều nay dưới túp lều ngoài sân trong của quán cà phê, và tôi muốn dán thông tin chỗ ngồi cho mọi người khi họ đến.<br><b>Jim Thomas (12:02 Chiều):</b> Không, tôi không thấy! Tôi đang đi giao hàng, nhưng tôi sẽ quay lại sớm. Bạn có thể tìm thấy tấm biển báo trong hốc tường ngay bên trong lối vào giao hàng của tòa nhà chúng ta. Chỉ cần đặt nó lại chỗ cũ khi bạn dùng xong để tôi có thể tìm thấy nó vào lần tới khi cần.<br><b>Joanne Matos (12:04 Chiều):</b> Không thành vấn đề. Cảm ơn nhé!"
        }
      },
      { 
        text: "At 12:04 P.M., what does Ms. Matos most likely mean when she writes, 'No problem'?", 
        options: { A: "She will probably be finished soon.", B: "She will meet Mr. Thomas at the entrance.", C: "She will return an item to its original location.", D: "She understands Ms. Nguyen's explanation." }, 
        correct: "C", 
        explanation: {
          dan_chung: "Jim: Just put it back when you're done... -> Joanne: No problem.",
          ham_y: "Jim nhắc nhở Joanne nhớ cất tấm biển về đúng chỗ sau khi dùng xong, và cô đáp 'Không thành vấn đề' để cam đoan rằng cô sẽ làm như vậy.<br>↳ Lời dặn <i>'put it back when you're done'</i> (đặt nó lại chỗ cũ khi xong việc) + sự đồng ý <i>'No problem'</i> = <i>'return an item to its original location'</i> (hoàn trả một món đồ về vị trí ban đầu).",
          lien_he: "Cụm 'put it back' (đặt lại chỗ cũ) đồng nghĩa với 'return it to its original location'.",
          tu_vung: [
            { tu: "signboard", nghia: "biển báo, bảng hiệu" },
            { tu: "courtyard", nghia: "sân trong" },
            { tu: "alcove", nghia: "hốc tường, khu vực lõm vào" },
            { tu: "original location", nghia: "vị trí ban đầu" }
          ],
          dich_bai: "<b>Joanne Matos (11:45 Sáng):</b> Tuyet và Jim, các bạn có biết tôi có thể tìm thấy tấm biển báo lớn đó ở đâu không—cái mà chúng ta thường dán ở lối vào để quảng cáo khi có chương trình giảm giá bên trong ấy?<br><b>Tuyet Nguyen (11:58 Sáng):</b> Gần đây tôi không thấy nó. Sao vậy?<br><b>Joanne Matos (11:59 Sáng):</b> Tôi đang chuẩn bị cho bữa tiệc chiều nay dưới túp lều ngoài sân trong của quán cà phê, và tôi muốn dán thông tin chỗ ngồi cho mọi người khi họ đến.<br><b>Jim Thomas (12:02 Chiều):</b> Không, tôi không thấy! Tôi đang đi giao hàng, nhưng tôi sẽ quay lại sớm. Bạn có thể tìm thấy tấm biển báo trong hốc tường ngay bên trong lối vào giao hàng của tòa nhà chúng ta. Chỉ cần đặt nó lại chỗ cũ khi bạn dùng xong để tôi có thể tìm thấy nó vào lần tới khi cần.<br><b>Joanne Matos (12:04 Chiều):</b> Không thành vấn đề. Cảm ơn nhé!"
        }
      }
    ]
  },

  // ==========================================
  // BÀI 48 (Gift Certificate)
  // ==========================================
  {
    category: "F. OTHERS",
    type: "Single Passage",
    texts: [
      "<b>Sparkling Creek Coffeehouse & Grill</b><br><b>Gift Certificate</b><br><br><b>Presented to:</b> Natasha Tucker<br><b>Amount:</b> $75<br><b>From:</b> Hua Xie<br><b>Message:</b> Thank you for your help with my article. You did a great job editing!<br><b>Authorized by:</b> Jenny Lance"
    ],
    questions: [
      { 
        text: "Why was Ms. Tucker given a gift certificate?", 
        options: { A: "To acknowledge good work at a restaurant", B: "To express gratitude for help that was provided", C: "To authorize a reward", D: "To repay a loan" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Message: Thank you for your help with my article. You did a great job editing!",
          ham_y: "Người tặng thẻ quà tặng viết lời nhắn cảm ơn vì Natasha Tucker đã giúp đỡ chỉnh sửa bài báo rất xuất sắc.<br>↳ <i>'Thank you for your help'</i> (Cảm ơn vì sự giúp đỡ của bạn) = <i>'express gratitude for help that was provided'</i> (Bày tỏ lòng biết ơn vì sự giúp đỡ đã được cung cấp).",
          lien_he: "Từ 'Thank you' thường được diễn đạt lại thành 'express gratitude' (bày tỏ sự biết ơn) hoặc 'show appreciation' (thể hiện sự trân trọng) trong các phương án trả lời.",
          tu_vung: [
            { tu: "gift certificate", nghia: "phiếu/thẻ quà tặng" },
            { tu: "express gratitude", nghia: "bày tỏ lòng biết ơn" },
            { tu: "acknowledge", nghia: "công nhận, ghi nhận" },
            { tu: "authorize", nghia: "ủy quyền, cho phép" }
          ],
          dich_bai: "<b>Quán Cà phê & Đồ nướng Sparkling Creek</b><br><b>Phiếu Quà tặng</b><br><br><b>Tặng cho:</b> Natasha Tucker<br><b>Số tiền:</b> $75<br><b>Từ:</b> Hua Xie<br><b>Lời nhắn:</b> Cảm ơn bạn đã giúp đỡ tôi với bài báo. Bạn đã làm một công việc chỉnh sửa tuyệt vời!<br><b>Người ủy quyền:</b> Jenny Lance"
        }
      },
      { 
        text: "Who most likely is Ms. Lance?", 
        options: { A: "An employee at a restaurant", B: "A friend of Ms. Tucker's", C: "An editor", D: "Ms. Xie's assistant" }, 
        correct: "A", 
        explanation: {
          dan_chung: "Sparkling Creek Coffeehouse & Grill ... Authorized by: Jenny Lance",
          ham_y: "Bà Lance là người ký tên xác nhận/ủy quyền cho tấm thẻ quà tặng có giá trị thanh toán tại nhà hàng. Chỉ có người làm việc ở đó mới có quyền này.<br>↳ Tên nhà hàng là <i>'Coffeehouse & Grill'</i>, và dòng chữ <i>'Authorized by: Jenny Lance'</i> (Được ủy quyền/phê duyệt bởi) -> Chỉ có quản lý/nhân viên nhà hàng mới có quyền ký phiếu quà tặng này = <i>'An employee at a restaurant'</i>.",
          lien_he: "Trong các biểu mẫu (form/certificate/invoice), mục 'Authorized by' hoặc 'Issued by' luôn dành cho người đại diện của công ty phát hành ra tờ giấy đó.",
          tu_vung: [
            { tu: "gift certificate", nghia: "phiếu/thẻ quà tặng" },
            { tu: "express gratitude", nghia: "bày tỏ lòng biết ơn" },
            { tu: "acknowledge", nghia: "công nhận, ghi nhận" },
            { tu: "authorize", nghia: "ủy quyền, cho phép" }
          ],
          dich_bai: "<b>Quán Cà phê & Đồ nướng Sparkling Creek</b><br><b>Phiếu Quà tặng</b><br><br><b>Tặng cho:</b> Natasha Tucker<br><b>Số tiền:</b> $75<br><b>Từ:</b> Hua Xie<br><b>Lời nhắn:</b> Cảm ơn bạn đã giúp đỡ tôi với bài báo. Bạn đã làm một công việc chỉnh sửa tuyệt vời!<br><b>Người ủy quyền:</b> Jenny Lance"
        }
      }
    ]
  },

  // ==========================================
  // BÀI 49 (Welcome E-mail)
  // ==========================================
  {
    category: "F. OTHERS",
    type: "Single Passage",
    texts: [
      "<b>Welcome E-mail Checklist</b><br>&#9744; Warmly welcome new staff to our team<br>&#9744; Include dates for training sessions<br>&#9744; Include daily training schedule (as attachment)<br>&#9744; Provide phone numbers of mentors<br>&#9744; Create list of documents to bring<br><br><b>Onboarding</b><br>&#9744; Announce start dates<br>&#9744; Include information about social gathering to welcome new hires and allow them to meet company leaders<br>&#9744; Contact the Technology Team to create e-mail accounts<br>&#9744; Prepare new ID badges and keys<br>&#9744; Prepare benefit packages (health insurance and retirement)<br>&#9744; Personally meet new hires upon their arrival"
    ],
    questions: [
      { 
        text: "What is the purpose of the checklist?", 
        options: { A: "To announce a new e-mail system", B: "To prepare for new employees", C: "To assist people who are leaving a company", D: "To notify trainers of a schedule" }, 
        correct: "B", 
        explanation: {
          dan_chung: "Welcome E-mail Checklist ... warmly welcome new staff to our team ... Onboarding ... welcome new hires",
          ham_y: "Bản danh sách này liệt kê tất cả các bước cần làm để chào đón và giúp đỡ những nhân viên vừa mới gia nhập công ty hội nhập với môi trường mới.<br>↳ Các từ <i>'new staff'</i>, <i>'Onboarding'</i> (đào tạo hội nhập), <i>'new hires'</i> (người mới được tuyển) = <i>'prepare for new employees'</i> (chuẩn bị cho nhân viên mới).",
          lien_he: "Từ vựng quan trọng: 'Onboarding' (quy trình hội nhập) luôn dành cho 'new employees / new hires' (nhân viên mới). Ngược lại là 'Offboarding' dành cho người nghỉ việc.",
          tu_vung: [
            { tu: "onboarding", nghia: "quy trình hội nhập (cho nhân viên mới)" },
            { tu: "social gathering", nghia: "buổi giao lưu, tụ họp xã hội" },
            { tu: "new hire", nghia: "nhân viên mới được tuyển" },
            { tu: "benefit package", nghia: "gói phúc lợi" }
          ],
          dich_bai: "<b>Danh sách Kiểm tra Email Chào mừng</b><br>&#9744; Chào mừng nồng nhiệt nhân viên mới đến với đội ngũ của chúng ta<br>&#9744; Bao gồm ngày cho các buổi đào tạo<br>&#9744; Bao gồm lịch trình đào tạo hàng ngày (dưới dạng tệp đính kèm)<br>&#9744; Cung cấp số điện thoại của người hướng dẫn<br>&#9744; Tạo danh sách các tài liệu cần mang theo<br><br><b>Quy trình Hội nhập</b><br>&#9744; Thông báo ngày bắt đầu<br>&#9744; Bao gồm thông tin về buổi giao lưu để chào đón nhân viên mới và cho phép họ gặp gỡ các lãnh đạo công ty<br>&#9744; Liên hệ với Nhóm Công nghệ để tạo tài khoản email<br>&#9744; Chuẩn bị thẻ ID mới và chìa khóa<br>&#9744; Chuẩn bị các gói phúc lợi (bảo hiểm y tế và hưu trí)<br>&#9744; Đích thân gặp gỡ những người mới tuyển dụng khi họ đến"
        }
      },
      { 
        text: "What is one goal of the social gathering?", 
        options: { A: "To meet managers", B: "To learn about benefits", C: "To receive identification documents", D: "To begin training exercises" }, 
        correct: "A", 
        explanation: {
          dan_chung: "social gathering to welcome new hires and allow them to meet company leaders",
          ham_y: "Một trong các mục đích của buổi tụ họp là để tạo cơ hội cho nhân viên mới được tiếp xúc và gặp mặt ban lãnh đạo công ty.<br>↳ <i>'meet company leaders'</i> (gặp gỡ các nhà lãnh đạo công ty) = <i>'meet managers'</i> (gặp gỡ các nhà quản lý).",
          lien_he: "Từ 'leaders' (lãnh đạo) thường được quy đổi thành 'managers' (quản lý), 'executives' (giám đốc điều hành) hoặc 'directors' (giám đốc).",
          tu_vung: [
            { tu: "onboarding", nghia: "quy trình hội nhập (cho nhân viên mới)" },
            { tu: "social gathering", nghia: "buổi giao lưu, tụ họp xã hội" },
            { tu: "new hire", nghia: "nhân viên mới được tuyển" },
            { tu: "benefit package", nghia: "gói phúc lợi" }
          ],
          dich_bai: "<b>Danh sách Kiểm tra Email Chào mừng</b><br>&#9744; Chào mừng nồng nhiệt nhân viên mới đến với đội ngũ của chúng ta<br>&#9744; Bao gồm ngày cho các buổi đào tạo<br>&#9744; Bao gồm lịch trình đào tạo hàng ngày (dưới dạng tệp đính kèm)<br>&#9744; Cung cấp số điện thoại của người hướng dẫn<br>&#9744; Tạo danh sách các tài liệu cần mang theo<br><br><b>Quy trình Hội nhập</b><br>&#9744; Thông báo ngày bắt đầu<br>&#9744; Bao gồm thông tin về buổi giao lưu để chào đón nhân viên mới và cho phép họ gặp gỡ các lãnh đạo công ty<br>&#9744; Liên hệ với Nhóm Công nghệ để tạo tài khoản email<br>&#9744; Chuẩn bị thẻ ID mới và chìa khóa<br>&#9744; Chuẩn bị các gói phúc lợi (bảo hiểm y tế và hưu trí)<br>&#9744; Đích thân gặp gỡ những người mới tuyển dụng khi họ đến"
        }
      }
    ]
  },

  // ==========================================
  // BÀI 50 (Service Request Form)
  // ==========================================
  {
    category: "F. OTHERS",
    type: "Single Passage",
    texts: [
      "<b>SERVICE REQUEST FORM</b><br>Complete all fields and deliver to Technology Services (room 412).<br><br><b>Requester Name:</b> Elenora Deckow<br><b>Requester Office:</b> Room 718<br><b>Service Location:</b> Room 500<br><b>Service Type:</b> Repair<br><br><b>Description of Request</b><br>There is a problem with the television audio. When I played an online video, the image was fine, but I could not hear anything... I'm supposed to deliver a product demonstration for a client in room 500 next Monday, so I would greatly appreciate it if the issue can be fixed by this Friday."
    ],
    questions: [
      { 
        text: "Why was the form submitted?", 
        options: { A: "An image is not displaying clearly.", B: "A projector needs to be set up.", C: "Audio is not functioning properly.", D: "A microphone needs to be repaired." }, 
        correct: "C", 
        explanation: {
          dan_chung: "problem with the television audio. When I played an online video... I could not hear anything",
          ham_y: "Người viết gửi yêu cầu bảo trì vì tivi trong phòng có hình ảnh bình thường nhưng lại không phát ra tiếng.<br>↳ <i>'problem with the television audio'</i> (có vấn đề với âm thanh tivi) & <i>'could not hear anything'</i> (không thể nghe thấy gì) = <i>'Audio is not functioning properly'</i> (Âm thanh không hoạt động đúng cách).",
          lien_he: "Các từ chỉ thiết bị âm thanh như 'audio', 'sound', 'speaker', 'hear' thường là dấu hiệu nhận biết đáp án về lỗi âm thanh.",
          tu_vung: [
            { tu: "requester", nghia: "người yêu cầu" },
            { tu: "functioning properly", nghia: "hoạt động bình thường" },
            { tu: "demonstration", nghia: "sự trình diễn, thuyết minh" }
          ],
          dich_bai: "<b>BIỂU MẪU YÊU CẦU DỊCH VỤ</b><br>Hoàn thành tất cả các trường và giao đến Dịch vụ Công nghệ (phòng 412).<br><br><b>Tên Người yêu cầu:</b> Elenora Deckow<br><b>Văn phòng Người yêu cầu:</b> Phòng 718<br><b>Vị trí Dịch vụ:</b> Phòng 500<br><b>Loại Dịch vụ:</b> Sửa chữa<br><br><b>Mô tả Yêu cầu</b><br>Có một vấn đề với âm thanh tivi. Khi tôi phát một video trực tuyến, hình ảnh thì tốt, nhưng tôi không thể nghe thấy gì... Tôi dự kiến sẽ trình bày một buổi minh họa sản phẩm cho khách hàng tại phòng 500 vào thứ Hai tuần tới, vì vậy tôi sẽ rất biết ơn nếu vấn đề này có thể được khắc phục trước thứ Sáu tuần này."
        }
      },
      { 
        text: "What is Ms. Deckow planning to do next week?", 
        options: { A: "Visit a client site", B: "Deliver a product", C: "Create an online video", D: "Give a presentation" }, 
        correct: "D", 
        explanation: {
          dan_chung: "I'm supposed to deliver a product demonstration for a client in room 500 next Monday",
          ham_y: "Lý do cô ấy cần sửa tivi gấp là vì tuần sau cô phải thực hiện một buổi giới thiệu sản phẩm cho khách hàng xem.<br>↳ <i>'deliver a product demonstration'</i> (thực hiện một bài thuyết trình minh họa sản phẩm) = <i>'Give a presentation'</i> (Đưa ra một bài thuyết trình).",
          lien_he: "Cụm 'deliver a demonstration' / 'give a demonstration' đồng nghĩa với 'give a presentation' (thuyết trình). Lưu ý tránh bẫy từ 'deliver a product' (giao hàng) - ở đây là giao 'bài thuyết trình về sản phẩm' chứ không phải đi giao hàng hóa.",
          tu_vung: [
            { tu: "requester", nghia: "người yêu cầu" },
            { tu: "functioning properly", nghia: "hoạt động bình thường" },
            { tu: "demonstration", nghia: "sự trình diễn, thuyết minh" }
          ],
          dich_bai: "<b>BIỂU MẪU YÊU CẦU DỊCH VỤ</b><br>Hoàn thành tất cả các trường và giao đến Dịch vụ Công nghệ (phòng 412).<br><br><b>Tên Người yêu cầu:</b> Elenora Deckow<br><b>Văn phòng Người yêu cầu:</b> Phòng 718<br><b>Vị trí Dịch vụ:</b> Phòng 500<br><b>Loại Dịch vụ:</b> Sửa chữa<br><br><b>Mô tả Yêu cầu</b><br>Có một vấn đề với âm thanh tivi. Khi tôi phát một video trực tuyến, hình ảnh thì tốt, nhưng tôi không thể nghe thấy gì... Tôi dự kiến sẽ trình bày một buổi minh họa sản phẩm cho khách hàng tại phòng 500 vào thứ Hai tuần tới, vì vậy tôi sẽ rất biết ơn nếu vấn đề này có thể được khắc phục trước thứ Sáu tuần này."
        }
      }
    ]
  },

  // ==========================================
  // BÀI 51 (Meeting Minutes)
  // ==========================================
  {
    category: "F. OTHERS",
    type: "Single Passage",
    texts: [
      "<b>Meeting Minutes—August 10</b><br><br><b>In attendance:</b> Miguel Luna, Jennifer Lin, Amal Taylor, Vladimir Ikram, Nevena Ivanova<br><br>Amal Taylor, the product manager, opened the meeting. She reported that our new line of herbal teas will be on local store shelves and in restaurants starting September 25. The initial launch includes three flavors: peppermint, lemon ginger, and hibiscus flower. More varieties are expected to be added next year.<br><br>Next, Miguel Luna shared his prototypes of the tea boxes and discussed the sustainability of the materials used to produce them. The colorful designs received positive feedback from meeting attendees.<br><br>After that, Jennifer Lin provided a brief overview of the marketing budget for the product launch... For more detailed information about the marketing budget, contact Ms. Lin directly.<br><br>Finally, Vladimir Ikram led a discussion about advertising options. The final decision was to start with print advertisements in <i>The Southtown Times</i>."
    ],
    questions: [
      { 
        text: "What does the company intend to do in the future?", 
        options: { A: "Open a series of tea shops", B: "Expand its product line", C: "Develop beverages other than tea", D: "Replace the current tea varieties" }, 
        correct: "B", 
        explanation: {
          dan_chung: "The initial launch includes three flavors... More varieties are expected to be added next year.",
          ham_y: "Mặc dù ban đầu chỉ tung ra 3 hương vị, công ty dự kiến sẽ bổ sung thêm nhiều loại mới vào năm sau. Điều này đồng nghĩa với việc mở rộng danh mục sản phẩm.<br>↳ <i>'More varieties... added next year'</i> (Nhiều hương vị/phân loại khác sẽ được thêm vào năm sau) = <i>'Expand its product line'</i> (Mở rộng dòng sản phẩm của công ty).",
          lien_he: "Khi nói về việc 'add more options/varieties/flavors' (thêm loại mới), đáp án trong TOEIC thường dùng cụm từ trừu tượng 'expand product line / offerings' (mở rộng dòng sản phẩm).",
          tu_vung: [
            { tu: "in attendance", nghia: "có mặt, người tham dự" },
            { tu: "initial launch", nghia: "đợt ra mắt ban đầu" },
            { tu: "prototype", nghia: "nguyên mẫu, bản mẫu" },
            { tu: "print advertisement", nghia: "quảng cáo trên báo in" }
          ],
          dich_bai: "<b>Biên bản Cuộc họp—10 tháng 8</b><br><br><b>Người tham dự:</b> Miguel Luna, Jennifer Lin, Amal Taylor, Vladimir Ikram, Nevena Ivanova<br><br>Amal Taylor, giám đốc sản phẩm, đã khai mạc cuộc họp. Cô báo cáo rằng dòng sản phẩm trà thảo mộc mới của chúng ta sẽ có mặt trên kệ các cửa hàng địa phương và trong các nhà hàng bắt đầu từ ngày 25 tháng 9. Lần ra mắt ban đầu bao gồm ba hương vị: bạc hà, chanh gừng và hoa dâm bụt. Dự kiến sẽ có thêm nhiều loại được bổ sung vào năm tới.<br><br>Tiếp theo, Miguel Luna chia sẻ các nguyên mẫu hộp trà của mình và thảo luận về tính bền vững của các vật liệu được sử dụng để sản xuất chúng. Những thiết kế đầy màu sắc đã nhận được phản hồi tích cực từ những người tham dự cuộc họp.<br><br>Sau đó, Jennifer Lin cung cấp một cái nhìn tổng quan ngắn gọn về ngân sách tiếp thị cho đợt ra mắt sản phẩm... Để biết thêm thông tin chi tiết về ngân sách tiếp thị, hãy liên hệ trực tiếp với cô Lin.<br><br>Cuối cùng, Vladimir Ikram chủ trì một cuộc thảo luận về các lựa chọn quảng cáo. Quyết định cuối cùng là bắt đầu bằng các quảng cáo trên báo in trên tờ <i>The Southtown Times</i>."
        }
      },
      { 
        text: "Who most likely is Mr. Luna?", 
        options: { A: "A shipping clerk", B: "A factory supervisor", C: "A store owner", D: "A packaging designer" }, 
        correct: "D", 
        explanation: {
          dan_chung: "Miguel Luna shared his prototypes of the tea boxes... The colorful designs received positive feedback",
          ham_y: "Dựa vào việc ông Luna trình bày các nguyên mẫu hộp đựng trà và các thiết kế đầy màu sắc, có thể suy ra ông ấy là người thiết kế bao bì.<br>↳ <i>'prototypes of the tea boxes'</i> (các bản mẫu của hộp trà) + <i>'colorful designs'</i> (thiết kế đầy màu sắc) = Công việc của <i>'A packaging designer'</i> (Một nhà thiết kế bao bì).",
          lien_he: "Dạng bài suy luận nghề nghiệp. Các từ khóa 'box' (hộp), 'container' (vật chứa), 'wrap' (gói) đi kèm với 'design' (thiết kế) thường chỉ công việc của 'packaging designer'.",
          tu_vung: [
            { tu: "in attendance", nghia: "có mặt, người tham dự" },
            { tu: "initial launch", nghia: "đợt ra mắt ban đầu" },
            { tu: "prototype", nghia: "nguyên mẫu, bản mẫu" },
            { tu: "print advertisement", nghia: "quảng cáo trên báo in" }
          ],
          dich_bai: "<b>Biên bản Cuộc họp—10 tháng 8</b><br><br><b>Người tham dự:</b> Miguel Luna, Jennifer Lin, Amal Taylor, Vladimir Ikram, Nevena Ivanova<br><br>Amal Taylor, giám đốc sản phẩm, đã khai mạc cuộc họp. Cô báo cáo rằng dòng sản phẩm trà thảo mộc mới của chúng ta sẽ có mặt trên kệ các cửa hàng địa phương và trong các nhà hàng bắt đầu từ ngày 25 tháng 9. Lần ra mắt ban đầu bao gồm ba hương vị: bạc hà, chanh gừng và hoa dâm bụt. Dự kiến sẽ có thêm nhiều loại được bổ sung vào năm tới.<br><br>Tiếp theo, Miguel Luna chia sẻ các nguyên mẫu hộp trà của mình và thảo luận về tính bền vững của các vật liệu được sử dụng để sản xuất chúng. Những thiết kế đầy màu sắc đã nhận được phản hồi tích cực từ những người tham dự cuộc họp.<br><br>Sau đó, Jennifer Lin cung cấp một cái nhìn tổng quan ngắn gọn về ngân sách tiếp thị cho đợt ra mắt sản phẩm... Để biết thêm thông tin chi tiết về ngân sách tiếp thị, hãy liên hệ trực tiếp với cô Lin.<br><br>Cuối cùng, Vladimir Ikram chủ trì một cuộc thảo luận về các lựa chọn quảng cáo. Quyết định cuối cùng là bắt đầu bằng các quảng cáo trên báo in trên tờ <i>The Southtown Times</i>."
        }
      },
      { 
        text: "Who can provide information about the marketing budget?", 
        options: { A: "Ms. Lin", B: "Ms. Taylor", C: "Mr. Ikram", D: "Ms. Ivanova" }, 
        correct: "A", 
        explanation: {
          dan_chung: "For more detailed information about the marketing budget, contact Ms. Lin directly.",
          ham_y: "Biên bản họp chỉ đích danh Ms. Lin là người tiếp nhận các câu hỏi liên quan đến chi tiết của ngân sách quảng cáo.<br>↳ <i>'detailed information about the marketing budget, contact Ms. Lin'</i> (thông tin chi tiết về ngân sách tiếp thị, hãy liên hệ cô Lin) = đáp án <i>'Ms. Lin'</i>.",
          lien_he: "Câu hỏi 'Who' (Ai) rất phổ biến trong TOEIC. Bạn chỉ cần tìm đúng từ khóa trong bài ('marketing budget') rồi xem tên người đứng gần đó ('contact Ms. Lin').",
          tu_vung: [
            { tu: "in attendance", nghia: "có mặt, người tham dự" },
            { tu: "initial launch", nghia: "đợt ra mắt ban đầu" },
            { tu: "prototype", nghia: "nguyên mẫu, bản mẫu" },
            { tu: "print advertisement", nghia: "quảng cáo trên báo in" }
          ],
          dich_bai: "<b>Biên bản Cuộc họp—10 tháng 8</b><br><br><b>Người tham dự:</b> Miguel Luna, Jennifer Lin, Amal Taylor, Vladimir Ikram, Nevena Ivanova<br><br>Amal Taylor, giám đốc sản phẩm, đã khai mạc cuộc họp. Cô báo cáo rằng dòng sản phẩm trà thảo mộc mới của chúng ta sẽ có mặt trên kệ các cửa hàng địa phương và trong các nhà hàng bắt đầu từ ngày 25 tháng 9. Lần ra mắt ban đầu bao gồm ba hương vị: bạc hà, chanh gừng và hoa dâm bụt. Dự kiến sẽ có thêm nhiều loại được bổ sung vào năm tới.<br><br>Tiếp theo, Miguel Luna chia sẻ các nguyên mẫu hộp trà của mình và thảo luận về tính bền vững của các vật liệu được sử dụng để sản xuất chúng. Những thiết kế đầy màu sắc đã nhận được phản hồi tích cực từ những người tham dự cuộc họp.<br><br>Sau đó, Jennifer Lin cung cấp một cái nhìn tổng quan ngắn gọn về ngân sách tiếp thị cho đợt ra mắt sản phẩm... Để biết thêm thông tin chi tiết về ngân sách tiếp thị, hãy liên hệ trực tiếp với cô Lin.<br><br>Cuối cùng, Vladimir Ikram chủ trì một cuộc thảo luận về các lựa chọn quảng cáo. Quyết định cuối cùng là bắt đầu bằng các quảng cáo trên báo in trên tờ <i>The Southtown Times</i>."
        }
      },
      { 
        text: "Where will the products initially be advertised?", 
        options: { A: "In a newspaper", B: "In an online magazine", C: "On the radio", D: "On social media" }, 
        correct: "A", 
        explanation: {
          dan_chung: "The final decision was to start with print advertisements in The Southtown Times.",
          ham_y: "Cuộc họp đã thống nhất chạy quảng cáo trên báo in của tờ 'The Southtown Times' trong đợt đầu tiên.<br>↳ <i>'print advertisements in The Southtown Times'</i> (các quảng cáo in ấn trên tờ The Southtown Times) = <i>'In a newspaper'</i> (Trong một tờ báo in).",
          lien_he: "Từ 'Times' thường được dùng trong tên của các tờ báo nổi tiếng (như The New York Times, The Los Angeles Times). Ngoài ra cụm 'print advertisements' (quảng cáo in ấn) cũng gợi ý hình thức quảng cáo này.",
          tu_vung: [
            { tu: "in attendance", nghia: "có mặt, người tham dự" },
            { tu: "initial launch", nghia: "đợt ra mắt ban đầu" },
            { tu: "prototype", nghia: "nguyên mẫu, bản mẫu" },
            { tu: "print advertisement", nghia: "quảng cáo trên báo in" }
          ],
          dich_bai: "<b>Biên bản Cuộc họp—10 tháng 8</b><br><br><b>Người tham dự:</b> Miguel Luna, Jennifer Lin, Amal Taylor, Vladimir Ikram, Nevena Ivanova<br><br>Amal Taylor, giám đốc sản phẩm, đã khai mạc cuộc họp. Cô báo cáo rằng dòng sản phẩm trà thảo mộc mới của chúng ta sẽ có mặt trên kệ các cửa hàng địa phương và trong các nhà hàng bắt đầu từ ngày 25 tháng 9. Lần ra mắt ban đầu bao gồm ba hương vị: bạc hà, chanh gừng và hoa dâm bụt. Dự kiến sẽ có thêm nhiều loại được bổ sung vào năm tới.<br><br>Tiếp theo, Miguel Luna chia sẻ các nguyên mẫu hộp trà của mình và thảo luận về tính bền vững của các vật liệu được sử dụng để sản xuất chúng. Những thiết kế đầy màu sắc đã nhận được phản hồi tích cực từ những người tham dự cuộc họp.<br><br>Sau đó, Jennifer Lin cung cấp một cái nhìn tổng quan ngắn gọn về ngân sách tiếp thị cho đợt ra mắt sản phẩm... Để biết thêm thông tin chi tiết về ngân sách tiếp thị, hãy liên hệ trực tiếp với cô Lin.<br><br>Cuối cùng, Vladimir Ikram chủ trì một cuộc thảo luận về các lựa chọn quảng cáo. Quyết định cuối cùng là bắt đầu bằng các quảng cáo trên báo in trên tờ <i>The Southtown Times</i>."
        }
      }
    ]
  }
]; // <--- CHÚ Ý: ĐÓNG MẢNG TẠI ĐÂY (KHÔNG XÓA DÒNG NÀY)