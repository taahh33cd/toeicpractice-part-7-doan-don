const rawExamDataSingle = [
  // ==========================================
  // BÀI 1 
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>NOTICE TO ALL STAFF</b><br><br>Beginning next Monday, all requests for office supplies must be submitted through our new online portal. Paper forms will no longer be accepted. Please contact the IT department if you need login credentials."],
    questions: [
      { text: "What is the main purpose of the notice?", options: { A: "To announce a new office location", B: "To explain a change in a procedure", C: "To introduce a new IT manager", D: "To promote a supply sale" }, correct: "B", explanation: "Thông báo về việc thay đổi quy trình yêu cầu văn phòng phẩm (từ giấy sang cổng thông tin trực tuyến)." },
      { text: "What should employees do if they cannot log in?", options: { A: "Submit a paper form", B: "Order supplies elsewhere", C: "Speak with the IT department", D: "Wait until next Monday" }, correct: "C", explanation: "Văn bản yêu cầu liên hệ IT nếu cần thông tin đăng nhập." }
    ]
  },

  // ==========================================
  // BÀI 2 
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>Dine at The Green Garden</b><br><br>Enjoy our farm-to-table seasonal menu. We are now open for weekend brunch from 10:00 A.M. to 2:00 P.M. Reservations are recommended for groups of five or more."],
    questions: [
      { text: "What is indicated about The Green Garden?", options: { A: "It is only open on weekends.", B: "It recently changed its menu.", C: "It specializes in breakfast items.", D: "It serves food made with local ingredients." }, correct: "D", explanation: "Cụm 'farm-to-table' ám chỉ việc sử dụng nguyên liệu địa phương/trang trại." },
      { text: "When is brunch served?", options: { A: "On Saturdays and Sundays", B: "Every morning", C: "Only on holidays", D: "Daily until 2:00 P.M." }, correct: "A", explanation: "Weekend brunch có nghĩa là bữa phụ sáng cuối tuần (Thứ 7 & CN)." }
    ]
  },

  // ==========================================
  // BÀI 3
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>From:</b> Logistics Team<br><b>To:</b> Sarah Jenkins<br><b>Date:</b> October 12<br><b>Subject:</b> Delayed Shipment<br><br>We apologize that your order #5592 is delayed due to severe weather conditions at our shipping hub. We expect it to arrive by Friday. As a gesture of goodwill, we have credited $10 to your account."],
    questions: [
      { text: "Why is the shipment late?", options: { A: "The item is out of stock.", B: "The address was incorrect.", C: "Bad weather", D: "A system error" }, correct: "C", explanation: "Lý do được nêu là 'severe weather conditions'." },
      { text: "What did the company do for Ms. Jenkins?", options: { A: "Reshipped the order", B: "Gave her a partial refund/credit", C: "Called her on the phone", D: "Canceled her order" }, correct: "B", explanation: "Công ty đã cộng 10$ vào tài khoản của cô ấy (credited $10)." }
    ]
  },

  // ==========================================
  // BÀI 4
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>Apex Electronics to Expand</b><br><br>Apex Electronics announced today that it will open three new retail locations in the metropolitan area by the end of the year. This move is expected to create over 100 new jobs."],
    questions: [
      { text: "What is Apex Electronics planning to do?", options: { A: "Close underperforming stores", B: "Hire a new CEO", C: "Increase its number of stores", D: "Sell the company" }, correct: "C", explanation: "Công ty thông báo 'open three new retail locations' (mở thêm 3 địa điểm bán lẻ)." }
    ]
  },

  // ==========================================
  // BÀI 5
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>Position: Graphic Designer</b><br><br>Lumina Marketing is seeking a creative professional with at least 3 years of experience in digital media. Candidates must submit a portfolio of their previous work along with their CV."],
    questions: [
      { text: "What must applicants provide?", options: { A: "A list of references", B: "Examples of their work", C: "A certification in coding", D: "A university transcript" }, correct: "B", explanation: "Candidates phải nộp một 'portfolio' (hồ sơ năng lực/ví dụ các sản phẩm đã làm)." }
    ]
  },

  // ==========================================
  // BÀI 6
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>The City Art Museum</b><br><br>Monday-Friday: 9:00-18:00<br>Saturday: 10:00-20:00<br>Sunday: Closed<br><i>Note: The West Wing is currently closed for renovation until November 5.</i>"],
    questions: [
      { text: "When can people visit the museum late in the evening?", options: { A: "Monday", B: "Friday", C: "Saturday", D: "Sunday" }, correct: "C", explanation: "Thứ 7 mở cửa đến 20:00 (muộn nhất trong tuần)." },
      { text: "What is mentioned about the West Wing?", options: { A: "It is being repaired.", B: "It is the largest wing.", C: "It houses ancient sculptures.", D: "It is open only on Sundays." }, correct: "A", explanation: "'Closed for renovation' nghĩa là đang được sửa chữa/nâng cấp." }
    ]
  },

  // ==========================================
  // BÀI 7
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>MEMO</b><br>To: All Tenants<br>From: Property Management<br>Subject: Parking Lot Repaving<br><br>The north parking lot will be closed for repaving from June 10 to June 12. Please use the south lot during this time. Vehicles left in the north lot will be towed at the owner's expense."],
    questions: [
      { text: "What will happen between June 10 and June 12?", options: { A: "A new building will be built.", B: "A parking lot will be fixed.", C: "A tenant meeting will occur.", D: "The south lot will be closed." }, correct: "B", explanation: "'Repaving' là lát lại mặt đường/sửa chữa bãi đậu xe." }
    ]
  },

  // ==========================================
  // BÀI 8
  // ==========================================
  {
    type: "Single Passage",
    texts: ["<b>Global Tech Summit</b><br><br>Join us for the annual summit on November 15 at the Grand Plaza Hotel. Keynote speakers include Dr. Aris Thorne and Elena Rodriguez. Register by Oct 1 for an early-bird discount."],
    questions: [
      { text: "How can people save money on registration?", options: { A: "By bringing a friend", B: "By registering before October 1", C: "By staying at the hotel", D: "By being a student" }, correct: "B", explanation: "'Register by Oct 1 for an early-bird discount' (đăng ký sớm để giảm giá)." }
    ]
  },

  // ==========================================
  // BÀI 9 (Từ ảnh gửi đầu tiên)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> Peter Burstein<br><b>From:</b> Calle Nilsson<br><b>Subject:</b> Meeting rescheduled<br><b>Date:</b> 22 October<br><br>Hi Peter,<br><br>Next week's meeting needs to be rescheduled. The new office assistant, Martina, did not take into consideration that the clients' offices are located throughout the world and in a variety of time zones. Several would have had to stay after closing time in order to attend the meeting. I have already canceled the original meeting and sent apologies for the inconvenience.<br><br>Could you please find time to review this with Martina? This is a task she will be performing regularly. I should have had you work with her before asking her to set up the appointment.<br><br>Thank you,<br><br>Calle Nilsson, Office Manager<br>Creatyx of Sweden AB"
    ],
    questions: [
      { text: "Why did Ms. Nilsson send the e-mail?", options: { A: "To set up an interview", B: "To suggest a new client", C: "To announce a new calendar system", D: "To request that an employee be trained" }, correct: "D", explanation: "Đoạn cuối email có viết 'Could you please find time to review this with Martina?' -> Nhờ đào tạo/hướng dẫn lại Martina." },
      { text: "What was wrong with the original time of the meeting?", options: { A: "It was scheduled during an office holiday.", B: "It was not convenient for international clients.", C: "Ms. Nilsson was not available on that date.", D: "The room was being used by Mr. Burstein." }, correct: "B", explanation: "Trong bài nhắc đến 'clients' offices are located throughout the world... Several would have had to stay after closing time' -> Không thuận tiện cho khách hàng quốc tế." }
    ]
  },

  // ==========================================
  // BÀI 10 (Từ ảnh gửi đầu tiên)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> hhollander@helensplace.com<br><b>From:</b> customerservice@eaterysource.com<br><b>Date:</b> January 16<br><b>Subject:</b> Order confirmation<br><br>Dear Ms. Hollander:<br><br>Thank you for shopping with us! This e-mail confirms that we have received your order from eaterysource.com. We are proud to be an international supplier of equipment to restaurants worldwide.<br><br>Your order is currently being processed. Orders are typically processed and sent out to our warehouses within two business days. Our staff will then begin to prepare your order for shipping. You will receive another e-mail once your order has shipped, updating you with its current tracking information.<br><br>Thank you for your business.<br><br>Regards,<br><br>The Eatery Source Team<br>Order Number: #19998056<br>Order Date: January 16"
    ],
    questions: [
      { text: "For what type of business does Ms. Hollander most likely work?", options: { A: "A restaurant", B: "A supermarket", C: "A food supplier", D: "A shipping company" }, correct: "A", explanation: "Người gửi bán 'equipment to restaurants' (thiết bị nhà hàng), suy ra bà Hollander mua hàng vì làm việc cho một nhà hàng." },
      { text: "According to the e-mail, when will Ms. Hollander receive another e-mail from Eatery Source?", options: { A: "When she makes a payment", B: "When she places another order", C: "When new products become available", D: "When her order has left the warehouse" }, correct: "D", explanation: "Bài viết 'You will receive another e-mail once your order has shipped' (nhận email khi đơn hàng đã được giao/rời kho)." }
    ]
  }, // <--- Chú ý có dấu phẩy ở đây để chờ nối Phần 2
// ==========================================
  // BÀI 11 (Toshi Auto Group)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> Wenbin Peng &lt;wpeng@chenconstruction.com&gt;<br><b>From:</b> Toshi Auto Group &lt;cs@toshiautogroup.com&gt;<br><b>Date:</b> February 26<br><b>Subject:</b> Your leased vehicle<br><br>Dear Mr. Peng:<br><br>As you know, Toshi Auto Group handles all the service needs for cars leased by employees of Chen Construction. According to our records, you took possession of your leased car on March 1 of last year. Your car is now due for its required annual service and maintenance check. To book your appointment, please call us at (215) 555-0109 or visit us online at www.toshiautogroup.com/serviceappointments.<br><br>Sincerely,<br><br>Toshi Auto Group Customer Service"
    ],
    questions: [
      { text: "What is the purpose of the e-mail?", options: { A: "To inquire about leasing a vehicle.", B: "To inform a customer of required car maintenance.", C: "To announce the release of a new car.", D: "To register a used car for an extended warranty." }, correct: "B", explanation: "Email viết 'Your car is now due for its required annual service and maintenance check' (Xe của bạn đã đến hạn bảo dưỡng định kỳ)." },
      { text: "What is indicated about Chen Construction?", options: { A: "It performs the servicing of its company vehicles.", B: "It has a new project beginning March 1.", C: "It provides leased cars to some employees.", D: "It will soon begin a construction project for Toshi Auto Group." }, correct: "C", explanation: "Dựa vào cụm 'cars leased by employees of Chen Construction' -> Công ty này cung cấp xe thuê cho nhân viên." }
    ]
  },

  // ==========================================
  // BÀI 12 (Job Application - Maria McFarland)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> amal.abboud@buniifoundation.org<br><b>From:</b> maria_mcfarland@myemail.com<br><b>Date:</b> Thursday, August 22<br><b>Subject:</b> Project Coordinator Position<br><b>Attachment:</b> resume_m_mcfarland.pdf<br><br>Dear Mr. Abboud,<br><br>My friend Josiah Wilkins told me that you are seeking a project coordinator for your company. I have a degree in business administration and am attaching my résumé as I think I am an excellent fit for your needs... Furthermore, my organizational skills enable me to coordinate multiple activities simultaneously, and I can convey expectations clearly to team members involved in each phase of a project.<br><br>... While I enjoy the kind of work I do, it has become clear to me that I need motivation from a strong mission. The goal of your company to create sustainable housing projects is something that I strongly support..."
    ],
    questions: [
      { text: "What does Ms. McFarland mention about Mr. Wilkins?", options: { A: "He informed her of a job opening.", B: "He will require a professional reference.", C: "He would make a good business partner.", D: "He is considering resigning from his position." }, correct: "A", explanation: "Cô ấy viết: 'My friend Josiah Wilkins told me that you are seeking a project coordinator' (bạn tôi báo rằng ông đang tìm người)." },
      { text: "The word 'convey' in paragraph 1, line 5, is closest in meaning to", options: { A: "transport", B: "communicate", C: "recommend", D: "adapt" }, correct: "B", explanation: "'Convey expectations' nghĩa là truyền đạt/giao tiếp những kỳ vọng -> Đồng nghĩa với communicate." },
      { text: "Why does Ms. McFarland want to leave her current position?", options: { A: "She wants a higher salary for her efforts.", B: "She wants to work with a more experienced team.", C: "She wants more opportunities for advancement.", D: "She wants a role that inspires her more." }, correct: "D", explanation: "Cô ấy cần 'motivation from a strong mission' (động lực từ một sứ mệnh mạnh mẽ) -> Muốn một công việc truyền cảm hứng hơn." }
    ]
  },

  // ==========================================
  // BÀI 13 (Red Street Dental Care)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "Pierre Gitane<br>26 Bear Tree Lane<br>Charlote, NC 28804<br>April 15<br><br>Dear Mr. Gitane,<br><br>This letter is to inform you that you are due for your semiannual dental care visit. Go to our Web site and fill out a form to request an appointment...<br><br>We are happy to announce that we now offer teeth whitening and invisible braces to improve your smile. Please let us know if you are interested in one or both of these services.<br><br>All best,<br>Sarah Hamadi<br>Office manager, Red Street Dental Care"
    ],
    questions: [
      { text: "Why did Mr. Gitane receive the letter?", options: { A: "He just got a new dentist.", B: "It is time for a routine checkup.", C: "Red Street Dental Care is requesting his feedback.", D: "He was dissatisfied with his last visit." }, correct: "B", explanation: "Thư viết 'due for your semiannual dental care visit' (đã đến hạn khám răng định kỳ 6 tháng)." },
      { text: "What does the letter state about the teeth-whitening service?", options: { A: "It costs about the same as invisible braces.", B: "It was not available at Red Street Dental Care until recently.", C: "It takes up to six months to obtain the desired results.", D: "It is not covered by dental insurance plans." }, correct: "B", explanation: "Thư viết 'we now offer...' (chúng tôi HIỆN NAY cung cấp...) -> Tức là dịch vụ này gần đây mới có." }
    ]
  },

  // ==========================================
  // BÀI 14 (Harrod Automotive Manufacturing)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Harrod Automotive Manufacturing</b><br>Andrew Dunn, Director<br>Laura Bradley, Site Manager<br><br>Welcome to Harrod Automotive Manufacturing! We are serious about maintaining a safe workplace environment. We ask that the following rules be strictly observed while you are touring the assembly floor. Anyone found in violation of these rules will be asked to leave the premises. For concerns about compliance, please contact the site manager.<br><br>ALWAYS:<br>➣ Stay with your tour guide.<br>➣ Wear safety glasses and helmet.<br>➣ Respond to alarm signals and obey evacuation instructions.<br>➣ Request permission from your guide before taking photographs."
    ],
    questions: [
      { text: "For whom is the notice most likely intended?", options: { A: "Maintenance workers", B: "Security guards", C: "Safety inspectors", D: "Factory visitors" }, correct: "D", explanation: "Thông báo liên tục nhắc đến 'tour guide' và 'touring the assembly floor' -> Dành cho khách tham quan." },
      { text: "According to the notice, why should someone contact Ms. Bradley?", options: { A: "To praise an employee", B: "To inquire about a policy", C: "To submit photographs", D: "To obtain a schedule" }, correct: "B", explanation: "Ms. Bradley là Site Manager. Đoạn văn ghi: 'For concerns about compliance, please contact the site manager' (Hỏi về việc tuân thủ chính sách thì liên hệ quản lý)." }
    ]
  },

  // ==========================================
  // BÀI 15 (Star Designs)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>STAR DESIGNS</b><br><br>Dear Customers:<br><br>For many years, we at Star Designs have strived to offer quality apparel at competitive prices. Unfortunately, as a quick glance at our online store shows, we have been forced to increase our prices recently. Every effort has been made to avoid this, but because of the growing costs of cotton and most fabrics that we use to sew our colorful shirts and formal wear, we could no longer afford to maintain our prices."
    ],
    questions: [
      { text: "What does Star Designs produce?", options: { A: "Software", B: "Clothing", C: "Cosmetics", D: "Furniture" }, correct: "B", explanation: "Nhắc đến 'apparel' (trang phục), 'sew our colorful shirts' (may áo sơ mi) -> Công ty may mặc." },
      { text: "What is being announced?", options: { A: "A grand opening", B: "An expanded product line", C: "A change in prices", D: "An upgraded online store" }, correct: "C", explanation: "Thông báo 'forced to increase our prices recently' (buộc phải tăng giá)." }
    ]
  },

  // ==========================================
  // BÀI 16 (Sales Lunch Workshop)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Sales Lunch Workshop</b><br><br>Attention sales associates! Are you new to CMG Direct Retail? Is your sales sheet looking a little short? Do you want to increase your commissions but can't seem to find new clients? Come to this month's lunch workshop, where Senior Sales Manager Chad Avakian will share his secrets for locating, securing, and expanding new accounts! Lunch is not provided, so be sure to pack something for yourself. After the meeting, a digital recording of the full presentation will be made available on the company's training Web site, so there's no need to bring a laptop for notes."
    ],
    questions: [
      { text: "What are attendees advised to bring to the meeting?", options: { A: "Some food", B: "Sales sheets", C: "Registration forms", D: "A laptop computer" }, correct: "A", explanation: "Bài viết nhắc: 'Lunch is not provided, so be sure to pack something for yourself' (Tự mang đồ ăn theo)." }
    ]
  },

  // ==========================================
  // BÀI 17 (Bus Line 75)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Attention Line 75 Riders</b><br><br>All Metrowestern passengers should be aware of the following temporary changes for bus line 75. Due to construction, service on Eighth Avenue between Taylor Street and Forbes Boulevard will be suspended during the following periods. We apologize for any inconvenience.<br><br>Monday, April 5, 10:00 A.M.-4:00 P.M.<br>Wednesday, April 7, 11:00 A.M.-4:30 P.M.<br>Friday, April 9, 6:30 P.M.-10:00 P.M.<br>Saturday, April 10, 9:00 A.M.-5:00 P.M.<br><br>As usual, all Metrowestern bus service ends at 11:30 P.M. All buses begin running again at 5:45 A.M. daily."
    ],
    questions: [
      { text: "What is the purpose of the notice?", options: { A: "To introduce a new express bus route", B: "To announce temporary changes in bus service", C: "To report on the completion of a construction project", D: "To request that riders avoid travel during peak hours" }, correct: "B", explanation: "Dòng đầu ghi rõ 'temporary changes for bus line 75' (thay đổi tạm thời dịch vụ xe buýt)." },
      { text: "According to the notice, when will the bus route be available?", options: { A: "on April 5 at 11:30 A.M.", B: "on April 7 at 5:30 A.M.", C: "on April 9 at 3:00 P.M.", D: "on April 10 at 4:00 P.M." }, correct: "C", explanation: "Vào Thứ Sáu 9/4, xe buýt chỉ bị NGỪNG từ 6:30 tối đến 10:00 tối. Tức là lúc 3:00 P.M (chiều) xe vẫn chạy bình thường." }
    ]
  },

  // ==========================================
  // BÀI 18 (Sunlight Sugar)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> Processing Plant Managers<br><b>From:</b> Sunlight Sugar Executive Board<br><b>Date:</b> June 15<br><b>Subject:</b> News<br><br>We are pleased to announce that, following our strongest quarter in over three years, we were ranked as the number-two sugar distributor in the region in the June 1 edition of <i>Sugar Industry Times</i>...<br><br>To celebrate this achievement, we would like to recognize employees with a bonus to be added to their July 15 paycheck. Plant managers at each location should inform staff at the next plant meeting on July 1."
    ],
    questions: [
      { text: "What is indicated about Sunlight Sugar?", options: { A: "It is changing the payday schedule.", B: "It publishes the Sugar Industry Times.", C: "It was established more than three years ago.", D: "It was previously the number-one distributor." }, correct: "C", explanation: "Họ thông báo đây là 'strongest quarter in over three years' (quý mạnh nhất trong hơn 3 năm) -> Tức là công ty đã tồn tại hơn 3 năm." },
      { text: "When will plant managers announce an employee bonus?", options: { A: "On June 1", B: "On June 15", C: "On July 1", D: "On July 15" }, correct: "C", explanation: "Đoạn cuối viết 'Plant managers... should inform staff at the next plant meeting on July 1'." }
    ]
  },

  // ==========================================
  // BÀI 19 (Art Exhibition)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Expressions in Form and Color</b><br>March 30<br>5:30 P.M. - 9:00 P.M.<br><br>The Summerlake University Art Department is pleased to present its annual showcase, opening today at 5:30 P.M. in the campus art gallery located in Building 4. Come see new artwork—including paintings, photographs, drawings, and sculptures—while enjoying beverages and appetizers...<br><br>This event is open to students, faculty, and the public. Parking is available in the designated areas next to Buildings 4 and 8. Please note that the area by Building 4 requires a permit, but the area by Building 8 is free to the public."
    ],
    questions: [
      { text: "What is the purpose of the notice?", options: { A: "To advertise an art class", B: "To promote a yearly exhibition", C: "To publicize the sale of a sculpture", D: "To announce the opening of a museum" }, correct: "B", explanation: "Sự kiện được mô tả là 'annual showcase' (triển lãm thường niên/hàng năm)." },
      { text: "What is NOT suggested about the event?", options: { A: "Refreshments will be served.", B: "Artists will attend.", C: "Free parking is available.", D: "Demonstrations will be given." }, correct: "D", explanation: "Bài đọc có nhắc đồ ăn uống (beverages), có nghệ sĩ đến (artists will be on hand), có bãi đỗ xe miễn phí (free to the public). KHÔNG CÓ biểu diễn (Demonstrations)." }
    ]
  },

  // ==========================================
  // BÀI 20 (South Street Bank)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> South Street Bank staff<br><b>From:</b> William Rees-Yates, Chief Executive Officer<br><b>Date:</b> May 12<br><br>I am pleased to announce that our bank is expanding. Thanks to our creative marketing and award-winning customer service, the demand for our services has been growing. — [1] —. We will therefore be opening a branch in Leesburg this year.<br><br>Although the new branch will not be in operation until July 1, it is already virtually ready to open. — [2] —. There remain, however, a couple of job openings to be filled that can be viewed at www.southstreetbank.com/jobs."
    ],
    questions: [
      { text: "What is the memo mainly about?", options: { A: "A merger with another company", B: "The hiring of several new staff", C: "A temporary closing for renovations", D: "The opening of a new branch" }, correct: "D", explanation: "Thông báo việc mở rộng và mở chi nhánh mới tại Leesburg." },
      { text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? 'Most Leesburg staff have already been recruited.'", options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" }, correct: "B", explanation: "Câu này (hầu hết nhân sự đã được tuyển) phù hợp nhất ở vị trí [2], ngay trước câu 'Tuy nhiên vẫn còn một vài vị trí trống...'." }
    ]
  }, // <--- Luôn giữ dấu phẩy này để chờ Phần 3
// ==========================================
  // BÀI 21 (Standing Desks)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>MEMO</b><br><b>To:</b> All Employees<br><b>From:</b> Don Wunder, Director of Facilities<br><b>Date:</b> February 10<br><b>Subject:</b> Standing Desks<br><br>As part of our commitment to employee wellness, we are evaluating new office equipment. Five standing desks will be available on a trial basis from February 20 to March 15 in the second-floor breakroom. The new Chanti B45 model is adjustable, so you can alternate between sitting and standing throughout the day. Please feel free to test them out and leave your feedback on the signup sheet provided nearby."
    ],
    questions: [
      { text: "What is the purpose of the memo?", options: { A: "To ask for help assembling furniture", B: "To offer staff a chance to try a new type of furniture", C: "To encourage participation in exercise classes", D: "To survey worker preferences for a new breakroom" }, correct: "B", explanation: "Mục đích là cho nhân viên dùng thử (trial basis) bàn làm việc đứng kiểu mới." },
      { text: "What is indicated about the Chanti B45 model?", options: { A: "It is difficult to use.", B: "It increases productivity.", C: "It can be adjusted to different heights.", D: "It is very expensive." }, correct: "C", explanation: "Bài viết dùng từ 'adjustable' (có thể điều chỉnh) và 'alternate between sitting and standing' (luân phiên giữa ngồi và đứng) -> Thay đổi được độ cao." }
    ]
  },

  // ==========================================
  // BÀI 22 (Drilling Process)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>MEMO</b><br><b>To:</b> Building 3 Occupants<br><b>From:</b> Maintenance Department<br><b>Date:</b> September 4<br><br>Please be advised that construction crews will be drilling into the concrete foundation of Building 3 tomorrow morning starting at 8:00 A.M. The drilling is expected to take several hours, and the work will be very noisy. — [1] —.<br><br>I have requested that the contractors begin drilling on the east side of the building and move westward. — [2] —. This should minimize the disruption for those of you with offices on the west side, at least for the first part of the morning. — [3] —. We apologize for the inconvenience and appreciate your patience as we work to upgrade our facilities. — [4] —."
    ],
    questions: [
      { text: "In which position does the following sentence best belong? 'However, there is little that can be done regarding noise levels.'", options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" }, correct: "C", explanation: "Câu này mang nghĩa 'Tuy nhiên, có rất ít cách để giải quyết vấn đề tiếng ồn', nó rất phù hợp ở vị trí [3] sau khi tác giả trình bày nỗ lực giảm thiểu sự gián đoạn bằng cách bắt đầu khoan từ phía đông." }
    ]
  },

  // ==========================================
  // BÀI 23 (Customer Service Study)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "Last week we conducted a study to gather opinions about our customer service. We contacted 100 randomly selected clients who had used our services in the past month. Overall, the results were very positive. Most people expressed satisfaction with their communication with our representatives. Their questions about packaging services and shipping charges were answered promptly and accurately. However, several clients noted that the tracking feature on our Web site was occasionally difficult to use."
    ],
    questions: [
      { text: "Where does the author most likely work?", options: { A: "At a market research firm", B: "At a delivery company", C: "At an insurance agency", D: "At an advertising company" }, correct: "B", explanation: "Đoạn văn nhắc đến 'packaging services' (dịch vụ đóng gói), 'shipping charges' (phí vận chuyển) và 'tracking feature' (tính năng theo dõi đơn hàng) -> Đây là một công ty giao nhận vận tải." }
    ]
  },

  // ==========================================
  // BÀI 24 (Tillford Press)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "LONDON (2 February) — Tillford Press announced today the launch of its new imprint, Tillford Exalt. This new line will feature books promoting healthy lifestyles and memoirs with uplifting messages. The imprint’s first title will be by retired athlete Sarah Lai. Her book is set for release in December."
    ],
    questions: [
      { text: "What is the main purpose of the article?", options: { A: "To promote new cookware", B: "To advertise a sports concert", C: "To announce a new series of books", D: "To provide a local calendar" }, correct: "C", explanation: "Bài báo thông báo về việc ra mắt một 'new imprint' (thương hiệu xuất bản/dòng sách mới) mang tên Tillford Exalt." }
    ]
  },

  // ==========================================
  // BÀI 25 (Smartphone Pricing)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "Gorman Electronics has finally revealed the details of its newest smartphone. The Pro Phone 4, which includes 512 GB of storage and an upgraded camera, will hit the shelves on 11 June. The £999 starting price is £100 more than that of the previous model, but tech experts believe the new features justify the cost."
    ],
    questions: [
      { text: "How much did the previous model cost?", options: { A: "£99", B: "£100", C: "£899", D: "£1099" }, correct: "C", explanation: "Giá khởi điểm của mẫu mới là £999, đắt hơn mẫu cũ £100. Suy ra giá mẫu cũ là 999 - 100 = £899." }
    ]
  },

  // ==========================================
  // BÀI 26 (Hannen Stores)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "The Hannen Corporation recently launched a unique training initiative called the In-Store Project. This project places employees from the corporate headquarters in retail stores, where they are paired with store employees to work typical shifts. The goal is to help corporate staff better understand the day-to-day operations and customer interactions on the sales floor."
    ],
    questions: [
      { text: "What does the project involve?", options: { A: "Store employees visiting the headquarters", B: "Hiring new interns for the summer", C: "Corporate employees temporarily working in stores", D: "Redesigning the layout of retail stores" }, correct: "C", explanation: "Dự án đưa nhân viên từ trụ sở chính (corporate headquarters) xuống làm việc tại các cửa hàng bán lẻ (in retail stores)." }
    ]
  },

  // ==========================================
  // BÀI 27 (Karlinga Beach Survey)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "A recent survey regarding the future development of Karlinga Beach yielded interesting results. Respondents to the survey included both local residents and tourists. In one key result, more than 80 percent agreed that there should be more emphasis on eco-friendly tourism, rather than building large resort complexes."
    ],
    questions: [
      { text: "What was a result of the survey?", options: { A: "Residents want more ferry service.", B: "Tourists want cheaper hotels.", C: "There is strong support for green tourism.", D: "The university should move to a new location." }, correct: "C", explanation: "Hơn 80% người khảo sát đồng ý cần chú trọng hơn vào du lịch thân thiện với môi trường (eco-friendly tourism), đồng nghĩa với 'green tourism' (du lịch xanh)." }
    ]
  },

  // ==========================================
  // BÀI 28 (Design Glory)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "After running a successful online jewelry boutique for three years, Tamara Banda has finally set up a brick-and-mortar store for her brand, Design Glory. The new shop, located in the city's Shadeside Plaza shopping area, opened its doors to the public on November 9."
    ],
    questions: [
      { text: "What is true about Design Glory?", options: { A: "It is an online-only business.", B: "It has a physical shop location.", C: "It sells heavy metal supplies.", D: "It was closed on Saturdays." }, correct: "B", explanation: "Cụm từ 'brick-and-mortar store' có nghĩa là cửa hàng truyền thống có mặt bằng thực tế (physical shop location)." }
    ]
  },

  // ==========================================
  // BÀI 29 (Community Garden)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Dear Neighbor,</b><br><br>Now that the long, cold winter is just behind us, we would like to invite you to help us improve the newly established Moon Township Community Garden. We are looking for volunteers to help plant vegetables and flowers this weekend."
    ],
    questions: [
      { text: "During which season was the notice most likely written?", options: { A: "Winter", B: "Spring", C: "Summer", D: "Autumn" }, correct: "B", explanation: "Tác giả viết 'the long, cold winter is just behind us' (mùa đông lạnh giá và dài dằng dặc vừa mới qua đi), suy ra hiện tại đang là mùa Xuân (Spring)." }
    ]
  },

  // ==========================================
  // BÀI 30 (Feller Airlines)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Feller Airlines Tarmac Delay Plan</b><br><br>In the rare event of a lengthy tarmac delay, Feller Airlines is committed to passenger comfort. If the delay lasts more than 60 minutes, we will provide complimentary snacks and beverages. Passengers will receive notifications regarding the status of the delay at the gate every 30 minutes."
    ],
    questions: [
      { text: "How often will passengers get updates?", options: { A: "Every 15 minutes", B: "Every 30 minutes", C: "Every hour", D: "Once a day" }, correct: "B", explanation: "Hành khách sẽ nhận được thông báo về tình trạng trễ chuyến bay mỗi 30 phút (every 30 minutes)." }
    ]
  }, // <--- Dấu phẩy ở đây để nối Phần 4
// ==========================================
  // BÀI 31 (Marigold Arena)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>City Planning Notice</b><br><br>The proposed Marigold Sports Arena will be built on the site of the former Marigold Furniture Factory. The building has remained empty since Marigold Furniture moved its production to a larger facility five years ago. Plans for the new arena have been sent to the city council for final approval."
    ],
    questions: [
      { text: "What will the new structure replace?", options: { A: "An empty lot", B: "A city park", C: "An unused building", D: "A shopping mall" }, correct: "C", explanation: "Đấu trường thể thao sẽ được xây trên nền nhà máy cũ đã bị bỏ trống 5 năm (unused building)." },
      { text: "The word 'draft' in paragraph 2, line 1 is closest in meaning to:", options: { A: "Wind", B: "Cost", C: "Version", D: "Change" }, correct: "C", explanation: "Mặc dù bài này mình đã tóm tắt, nhưng trong ngữ cảnh thiết kế/kế hoạch, 'draft' luôn đồng nghĩa với 'version' (phiên bản/bản phác thảo)." }
    ]
  },

  // ==========================================
  // BÀI 32 (Itami Theater)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Interim Director Appointed</b><br><br>Ms. Li has been appointed as the interim director of the Itami Theater. She has been at Itami for ten years, previously serving as director of new play development. She will continue to guide the play selection for next season while the board searches for a permanent director."
    ],
    questions: [
      { text: "What is suggested about the Itami Theater?", options: { A: "It focuses on new playwrights.", B: "It is closing down.", C: "It is searching for costume designers.", D: "It has operated for at least ten years." }, correct: "D", explanation: "Bà Li đã làm việc tại Itami được 10 năm (been at Itami for ten years) -> Nhà hát đã hoạt động ít nhất 10 năm." }
    ]
  },

  // ==========================================
  // BÀI 33 (Product Demonstrators)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>ADVERTISEMENT</b><br><br>Are you outgoing and enthusiastic? Do you enjoy talking to all types of people? BBD Staffing is seeking to hire product demonstrators to promote our clients' merchandise at local grocery stores. To apply, please upload a short video recording to our Web site telling us why you would be successful in this role."
    ],
    questions: [
      { text: "What is a requirement for the position?", options: { A: "A degree in marketing", B: "Ability to speak multiple languages", C: "An outgoing personality", D: "Previous experience in a bank" }, correct: "C", explanation: "Quảng cáo tìm kiếm những người hướng ngoại và nhiệt tình (outgoing and enthusiastic)." },
      { text: "What are applicants asked to do next?", options: { A: "Complete a survey", B: "Schedule an interview", C: "Submit a video recording", D: "Provide references" }, correct: "C", explanation: "Yêu cầu ứng viên tải lên một đoạn video ghi hình ngắn (upload a short video recording)." }
    ]
  },

  // ==========================================
  // BÀI 34 (Harbis Stationery)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Harbis Stationery Store Clearance Sale</b><br><br>Take advantage of our spring clearance sale! <br>• Box of 24 pens: £1.79 (10% off)<br>• Desk lamp: £19.99 (20% off)<br>• Wireless mouse: £17.99 (15% off)<br>• Any box of greeting cards or invitations: 50% off<br>• Backpack: £29.99 (30% off)"
    ],
    questions: [
      { text: "Which item has the greatest percentage discount?", options: { A: "Box of 24 pens", B: "Greeting cards or invitations", C: "Wireless mouse", D: "Desk lamp" }, correct: "B", explanation: "Hộp thiệp chúc mừng hoặc thiệp mời được giảm giá 50%, mức giảm theo phần trăm cao nhất trong danh sách." },
      { text: "What is the cheapest item listed?", options: { A: "Pens", B: "Desk lamp", C: "Mouse", D: "Backpack" }, correct: "A", explanation: "Hộp 24 chiếc bút có giá thấp nhất, chỉ £1.79." }
    ]
  },

  // ==========================================
  // BÀI 35 (Puppet Show)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Uncle Pete's Puppet Theater</b><br><br>Don't miss out on this year's magical performance! Uncle Pete's puppet adaptation of the well-known ballet <i>Moose Lake</i> has been delighting viewers of all ages for more than 30 years. Shows sell out every year, so get your tickets today online or at the box office."
    ],
    questions: [
      { text: "What is true about the show?", options: { A: "It is only for children.", B: "It is a new production.", C: "It is very popular.", D: "It is free to the public." }, correct: "C", explanation: "Chương trình đã làm hài lòng khán giả mọi lứa tuổi hơn 30 năm và năm nào cũng cháy vé (sell out every year) -> Rất nổi tiếng/phổ biến." },
      { text: "The show is based on what type of original work?", options: { A: "A children's book", B: "A movie", C: "A video game", D: "A dance performance" }, correct: "D", explanation: "Dựa trên 'ballet' Moose Lake. Ballet là một hình thức múa (dance performance)." }
    ]
  },

  // ==========================================
  // BÀI 36 (Conference Schedule Change)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Attention Conference Attendees</b><br><br>Please note a change to the afternoon schedule. The workshop on 'Digital Marketing Trends', originally scheduled for Room A at 2:00 P.M., has been moved to the Grand Ballroom to accommodate a larger audience. The time remains unchanged. We apologize for any confusion this may cause."
    ],
    questions: [
      { text: "Why was the workshop moved?", options: { A: "The original room was too small.", B: "The speaker arrived late.", C: "The projector in Room A was broken.", D: "The time of the presentation changed." }, correct: "A", explanation: "Được chuyển phòng để 'accommodate a larger audience' (chứa được lượng khán giả lớn hơn)." }
    ]
  },

  // ==========================================
  // BÀI 37 (Apartment Rental Notice)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Notice of Water Shut-off</b><br><br>Dear Residents of Oakwood Apartments,<br>Water service will be temporarily shut off in Building B on Tuesday, October 8, from 9:00 A.M. to 1:00 P.M. to repair a main pipe. Please make necessary preparations. We expect full service to resume promptly by early afternoon."
    ],
    questions: [
      { text: "What should residents of Building B do on October 8?", options: { A: "Pay their water bills", B: "Prepare for a lack of water", C: "Move their vehicles", D: "Contact the maintenance team" }, correct: "B", explanation: "Nước sẽ bị cắt (water shut-off), người dân được khuyên 'make necessary preparations' (chuẩn bị cần thiết cho việc này)." }
    ]
  },

  // ==========================================
  // BÀI 38 (Software Update Email)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>To:</b> All Staff<br><b>From:</b> IT Support<br><b>Subject:</b> System Update<br><br>A mandatory update for our accounting software will be installed overnight on Friday. You must save all your work and log out of the system before leaving the office on Friday evening. Any unsaved data will be lost during the reboot process."
    ],
    questions: [
      { text: "What are employees required to do on Friday?", options: { A: "Work an overnight shift", B: "Install a new software program", C: "Sign out of their accounts", D: "Change their passwords" }, correct: "C", explanation: "Nhân viên phải 'log out of the system' (đăng xuất khỏi hệ thống) trước khi rời văn phòng." }
    ]
  },

  // ==========================================
  // BÀI 39 (Jasmine Leaf Paint)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>United Kingdom's Top-Selling Paint Just Got Better</b><br><br><b>More Choices for Jasmine Leaf Paint</b><br><br>Jasmine Leaf Paint has been the number one selling house paint for the last five years in a row. — [1] —. But being the best seller is not enough for us. — [2] —. That's why we are bringing you additional ways to make your home more beautiful!<br><br>Our specially blended Blendex Formula interior paint and primer are prized for their stain resistance, excellent coverage, low-odour formula, ease of cleanup, and lifetime guarantee. In addition, we are now offering our paints in cans of five different sizes. And you can now get our paints in five beautiful finishes: flat, eggshell, satin, semigloss, and high gloss. — [3] —.<br><br>If you want rich, long-lasting, beautiful walls and ceilings inside your home, ask for Jasmine Leaf Paint at a quality paint store near you. — [4] —."
    ],
    questions: [
      { text: "For whom is the advertisement primarily intended?", options: { A: "Landscapers", B: "Paint store owners", C: "Art students", D: "Homeowners" }, correct: "D", explanation: "Đoạn quảng cáo nói 'make your home more beautiful' và 'beautiful walls and ceilings inside your home' -> Dành cho chủ nhà (Homeowners)." },
      { text: "What is new about Jasmine Leaf Paint?", options: { A: "It is now stain resistant.", B: "It now features a lifetime guarantee.", C: "It is now thicker.", D: "It is now available in more sizes." }, correct: "D", explanation: "Bài viết nhấn mạnh điểm MỚI là: 'we are NOW offering our paints in cans of five different sizes' (hiện cung cấp 5 kích cỡ lon khác nhau)." },
      { text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? 'This all means more convenient options for you.'", options: { A: "[1]", B: "[2]", C: "[3]", D: "[4]" }, correct: "C", explanation: "Câu này (Điều này có nghĩa là bạn có thêm nhiều lựa chọn tiện lợi hơn) đi ngay sau đoạn liệt kê các tùy chọn mới về kích cỡ và bề mặt hoàn thiện (5 sizes, 5 finishes)." }
    ]
  },

  // ==========================================
  // BÀI 40 (Trexdale Supply)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>About Our Company</b><br><br>Trexdale Supply specializes in designing, producing, and installing furniture for all types of scientific laboratories. We provide a range of fully assembled cabinets, workstations, benches, and more, all made exclusively at our production facility in Dallas, Texas. Our lab furniture is available in a wide variety of sizes and configurations to match the needs of any research application.<br><br>Our business offers products as well as design-consulting services. For start-up labs, we have a team of consulting specialists available to evaluate your facility's specific needs and assist you in arranging your space and choosing the most suitable furniture. Recently, for example, we were chosen by a major producer of biofuels to provide expert help in changing the layout of a research laboratory to maximize available space. As a result of this project, this client has realized substantial savings by reducing energy usage in the lab.<br><br>Please visit the 'Lab Planning' section of this Web site if you are interested in learning more about building or renovating a laboratory facility. There, you can fill out an interest form to contact one of our consultants about your next project."
    ],
    questions: [
      { text: "What does Trexdale Supply make?", options: { A: "Medical supplies", B: "Farming equipment", C: "Cabinets and furniture", D: "Glass laboratory equipment" }, correct: "C", explanation: "Công ty chuyên thiết kế, sản xuất và lắp đặt 'furniture' (nội thất) và 'cabinets, workstations, benches' (tủ, bàn làm việc...)." },
      { text: "What did Trexdale Supply do in a recent project?", options: { A: "It reorganized a client's laboratory.", B: "It converted its vehicles to use biofuels.", C: "It expanded staffing at its production facility.", D: "It helped a client organize a trade show." }, correct: "A", explanation: "Dự án gần đây giúp một nhà sản xuất nhiên liệu sinh học 'changing the layout of a research laboratory' (thay đổi cách bố trí) -> Đồng nghĩa với tổ chức/sắp xếp lại (reorganized)." },
      { text: "What method of communicating with Trexdale supply is mentioned?", options: { A: "By e-mail", B: "By phone", C: "By instant message", D: "By an online form" }, correct: "D", explanation: "Đoạn cuối hướng dẫn khách hàng 'fill out an interest form' (điền vào một biểu mẫu quan tâm) trên trang web -> Bằng biểu mẫu trực tuyến." }
    ]
  }, // <--- Dấu phẩy chờ để dán chốt chặn cuối cùng (Phần 5)
// ==========================================
  // BÀI 41 (Turner & Co.)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Turner & Co.</b><br><br>Turner & Co. has produced beautiful, energy-efficient windows that meet the taste and expectations of our customers since its founding in 1949. When you choose Turner & Co., you are buying more than just a window. You will be receiving the excellent services of our professionals who have been performing superb work for decades. We are passionate about helping you choose a quality window that exactly fits the specifications of your home. Additionally, we are fully committed to environmental protection and have recently been recognized for our sustainable business practices by the Environmental Protection Agency (EPA)."
    ],
    questions: [
      { text: "What is being advertised?", options: { A: "An insurance company", B: "A window manufacturer", C: "A landscaping company", D: "A window cleaning service provider" }, correct: "B", explanation: "Đoạn văn ghi công ty 'has produced beautiful, energy-efficient windows' (sản xuất cửa sổ tiết kiệm năng lượng) -> Nhà sản xuất cửa sổ." },
      { text: "What is indicated about Turner & Co.?", options: { A: "It is a family-run business.", B: "Its branches are located nationwide.", C: "It is an eco-friendly company.", D: "It has recently hired experienced employees." }, correct: "C", explanation: "Công ty 'fully committed to environmental protection' (cam kết bảo vệ môi trường) và được công nhận về thực tiễn kinh doanh bền vững -> Là một công ty thân thiện với môi trường (eco-friendly)." }
    ]
  },

  // ==========================================
  // BÀI 42 (Message Chain: Loading Dock B)
  // ==========================================
  {
    type: "Message Chain",
    texts: [
      "<b>Greg Skagen (8:58 A.M.):</b> Hi, Brenda. I'm here in the warehouse. All of my trainees have arrived, but I noticed the power door at Loading Dock B is acting up.<br><b>Brenda Sadauskas (8:59 A.M.):</b> Again?<br><b>Greg Skagen (8:59 A.M.):</b> When I push the button to open it, it raises all the way up but then drops back down to the closed position after about 30 seconds.<br><b>Brenda Sadauskas (9:00 A.M.):</b> I'll come down with the maintenance technicians. Why don't you bring your trainees to my area? You can teach them how to create shipping labels and then have them pack and label this morning's shipments.<br><b>Greg Skagen (9:02 A.M.):</b> Yes, that works.<br><b>Brenda Sadauskas (9:03 A.M.):</b> Thanks. Then you could show them the loading dock operations in the afternoon."
    ],
    questions: [
      { text: "What problem does Mr. Skagen mention?", options: { A: "Some new employees are absent.", B: "Some boxes are incorrectly labeled.", C: "A package delivery is delayed.", D: "An access door is malfunctioning." }, correct: "D", explanation: "Cửa tự động ở khu vực chất hàng B gặp sự cố (acting up / drops back down) -> Cửa ra vào bị hỏng (malfunctioning)." },
      { text: "At 9:02 A.M., what does Mr. Skagen most likely mean when he writes, 'Yes, that works'?", options: { A: "An electrician has arrived at a work site.", B: "Some equipment is operating smoothly.", C: "Trainees can help with some shipments.", D: "Ms. Sadauskas is well suited for her job." }, correct: "C", explanation: "Greg đồng ý với đề xuất của Brenda về việc đưa thực tập sinh sang khu vực của cô để phụ giúp đóng gói và dán nhãn các lô hàng buổi sáng." }
    ]
  },

  // ==========================================
  // BÀI 43 (Message Chain: Finance & Marketing)
  // ==========================================
  {
    type: "Message Chain",
    texts: [
      "<b>Ella Glatt (11:34 A.M.):</b> Hi. I know this is a busy day, but I wanted to know whether anyone from the finance team could come to the marketing meeting.<br><b>Stef Goldberg (11:35 A.M.):</b> Hi, Ella. I wish I could, but it starts at 2:00. I need to be at a different meeting at 2:30.<br><b>Ella Glatt (11:36 A.M.):</b> Oh, right. I forgot you were going to the executive board meeting.<br><b>Bill Iverman (11:38 A.M.):</b> The quarterly reports just came in, and Daniel, Stef, and I need to review them by the end of the day.<br><b>Daniel Seidel (11:41 A.M.):</b> That's true! But I could come from 2:00 to 2:15. That's all I can commit to.<br><b>Ella Glatt (11:43 A.M.):</b> Sounds great. We just need one of you to clarify a few quick points about the budget for the next advertising campaign."
    ],
    questions: [
      { text: "In what area does Mr. Iverman most likely work?", options: { A: "Marketing", B: "Finance", C: "Advertising", D: "Executive management" }, correct: "B", explanation: "Ella đang tìm người từ nhóm tài chính (finance team). Bill Iverman nói rằng anh, Daniel và Stef cần xem xét báo cáo tài chính quý -> Bill thuộc phòng Tài chính." },
      { text: "Why does Ms. Glatt want a colleague to attend a meeting?", options: { A: "To summarize a previous meeting", B: "To explain a promotional campaign", C: "To provide information about a budget", D: "To review recently approved documents" }, correct: "C", explanation: "Lý do Ella cần người là để 'clarify a few quick points about the budget' (làm rõ một vài điểm nhanh về ngân sách)." },
      { text: "At 11:43 A.M., what does Ms. Glatt most likely mean when she writes, 'Sounds great'?", options: { A: "She accepts Mr. Seidel's offer.", B: "She agrees that Mr. Iverman should attend the meeting at 3:00.", C: "She is pleased with the proposed budget.", D: "She is happy that a project has been completed." }, correct: "A", explanation: "Daniel đề nghị tham gia được 15 phút, Ella đáp 'Sounds great' -> Tức là cô chấp nhận lời đề nghị của Daniel." }
    ]
  },

  // ==========================================
  // BÀI 44 (Message Chain: Jack's Farewell)
  // ==========================================
  {
    type: "Message Chain",
    texts: [
      "<b>Teleshia Thomas (8:12 A.M.):</b> Laura, are you in the office already or still on your way in? I have a favor to ask.<br><b>Laura Penn (8:14 A.M.):</b> I'm here.<br><b>Teleshia Thomas (8:16 A.M.):</b> It's Jack's farewell breakfast this morning. I have juice, coffee, fruit, and pastries with me, but I haven't passed around cards for colleagues to sign to wish him well. Do you think you could do that? There are some cards on my desk.<br><b>Laura Penn (8:18 A.M.):</b> Actually, I can send out an e-mail and ask staff to go into your office to sign the cards. I'll arrange them on the round table in the corner. I'll do that straightaway."
    ],
    questions: [
      { text: "At 8:14 A.M., what does Ms. Penn most likely mean when she writes, 'I'm here'?", options: { A: "She is paying attention.", B: "She is in the same room as Ms. Thomas.", C: "She is waiting for Ms. Thomas to arrive.", D: "She is already at the office." }, correct: "D", explanation: "Trả lời cho câu hỏi 'đã ở văn phòng chưa hay đang đi đường', 'I'm here' có nghĩa là cô ấy đã có mặt tại văn phòng." },
      { text: "What will Ms. Penn most likely do next?", options: { A: "Give a presentation", B: "Postpone a meeting", C: "Put cards on a table", D: "Arrange seats in a staff room" }, correct: "C", explanation: "Cô ấy nói 'I'll arrange them [the cards] on the round table in the corner' (sắp xếp thiệp trên chiếc bàn tròn)." }
    ]
  },

  // ==========================================
  // BÀI 45 (Message Chain: Meeting Rescheduled)
  // ==========================================
  {
    type: "Message Chain",
    texts: [
      "<b>Sandra Kyle (8:19 A.M.):</b> Good morning. I'm on my way but running late because of a lane closure on Roseway Boulevard. It's all backed up, and the bus is barely moving.<br><b>Carolina Mata (8:23 A.M.):</b> Wait, haven't you heard? The meeting was moved to Thursday.<br><b>Sandra Kyle (8:24 A.M.):</b> Really? What a relief.<br><b>Carolina Mata (8:26 A.M.):</b> Mr. Chang is in Porteville meeting with the client about the final design for the new warehouse building. He won't be back until tomorrow.<br><b>Lucas Bodin (8:30 A.M.):</b> The client requested some last-minute changes, so Mr. Chang is away longer than expected. Hopefully the changes are minor, because we're already over the allocated budget."
    ],
    questions: [
      { text: "Why does Ms. Kyle expect to be late for work?", options: { A: "The bus is slow because of poor weather.", B: "The bus is stuck in traffic.", C: "She missed the bus.", D: "The bus arrived late at her stop." }, correct: "B", explanation: "Đường bị cấm 1 làn nên 'It's all backed up, and the bus is barely moving' (Kẹt xe và xe buýt gần như không di chuyển được) -> Bị kẹt xe." },
      { text: "At 8:24 A.M., what does Ms. Kyle most likely mean when she writes, 'Really'?", options: { A: "She is disappointed by certain designs.", B: "She disagrees with the decision.", C: "She is surprised by Ms. Mata's comment.", D: "She already heard the news." }, correct: "C", explanation: "Sandra vừa nghe tin cuộc họp bị hoãn, cô ấy đáp 'Really?' để thể hiện sự ngạc nhiên trước thông tin của đồng nghiệp." },
      { text: "What is indicated about the project?", options: { A: "It is more expensive than planned.", B: "It has some technical difficulties.", C: "It has been poorly managed.", D: "It cannot be completed on time." }, correct: "A", explanation: "Lucas nói 'we're already over the allocated budget' (chúng ta đã vượt quá ngân sách được cấp) -> Dự án đắt hơn dự kiến." }
    ]
  },

  // ==========================================
  // BÀI 46 (Message Chain: The Miller File)
  // ==========================================
  {
    type: "Message Chain",
    texts: [
      "<b>Lucy O'Malley (1:36 P.M.):</b> I am at the office, but I can't find the Miller file anywhere.<br><b>Stanley Hamstead (1:37 P.M.):</b> Did you check in the future projects file cabinet?<br><b>Lucy O'Malley (1:39 P.M.):</b> No luck. Any other ideas?<br><b>Stanley Hamstead (1:40 P.M.):</b> I bet it is in Charles Wada's office. Check on his desk and let me know.<br><b>Lucy O'Malley (1:47 P.M.):</b> Got it! How would you like me to get this to you?<br><b>Stanley Hamstead (1:48 P.M.):</b> Would it be too much to ask you to deliver it? We need the original documents with signatures. Please get here as soon as you can.<br><b>Lucy O'Malley (1:50 P.M.):</b> Not a problem. I'll take a taxi."
    ],
    questions: [
      { text: "At 1:39 P.M., what does Ms. O'Malley most likely mean when she writes, 'No luck'?", options: { A: "She does not support a future project.", B: "She is unsure where a coworker's office is.", C: "She was unable to find something.", D: "She needs more instruction from Mr. Wada." }, correct: "C", explanation: "Sau khi tìm ở tủ hồ sơ, cô ấy nói 'No luck' tức là không may mắn/không thấy đồ vật cần tìm." },
      { text: "What will Ms. O'Malley probably do next?", options: { A: "E-mail some documents.", B: "Call a courier service.", C: "Deliver some documents herself.", D: "Contact Mr. Wada." }, correct: "C", explanation: "Stanley nhờ giao tài liệu, Lucy nói 'I'll take a taxi' (Tôi sẽ bắt taxi) -> Tự tay đi giao tài liệu (Deliver some documents herself)." }
    ]
  },

  // ==========================================
  // BÀI 47 (Message Chain: Signboard)
  // ==========================================
  {
    type: "Message Chain",
    texts: [
      "<b>Joanne Matos (11:45 A.M.):</b> Tuyet and Jim, do you know where I can find that big signboard—the one that we usually post at the entrance to advertise when we're having a sale inside?<br><b>Tuyet Nguyen (11:58 A.M.):</b> I haven't seen it lately. Why?<br><b>Joanne Matos (11:59 A.M.):</b> I'm setting up for this afternoon's party under the tent out in the café courtyard, and I want to have seating information posted for people as they arrive.<br><b>Jim Thomas (12:02 P.M.):</b> No, I'm not! I'm out making a delivery right now, but I'll be back soon. You can find the signboard in the alcove just inside our building's delivery entrance. Just put it back when you're done so that I can find it the next time I need it.<br><b>Joanne Matos (12:04 P.M.):</b> No problem. Thanks!"
    ],
    questions: [
      { text: "Why did Ms. Matos begin the text-message chain?", options: { A: "She needs help locating something.", B: "She is wondering what time Mr. Thomas will arrive.", C: "She wants to know why the tent is up today.", D: "She wants help putting up decorations." }, correct: "A", explanation: "Cô ấy bắt đầu nhắn tin bằng câu 'do you know where I can find...' (bạn có biết tôi có thể tìm... ở đâu không) -> Cần giúp tìm đồ." },
      { text: "Where is Mr. Thomas most likely texting from?", options: { A: "The tent", B: "The building entrance", C: "His home", D: "A delivery site" }, correct: "D", explanation: "Jim nhắn 'I'm out making a delivery right now' (Tôi đang ra ngoài giao hàng ngay lúc này) -> Nhắn từ một địa điểm giao hàng." },
      { text: "At 12:04 P.M., what does Ms. Matos most likely mean when she writes, 'No problem'?", options: { A: "She will probably be finished soon.", B: "She will meet Mr. Thomas at the entrance.", C: "She will return an item to its original location.", D: "She understands Ms. Nguyen's explanation." }, correct: "C", explanation: "Jim dặn 'Just put it back when you're done' (Xong thì để lại chỗ cũ nhé), cô đáp 'No problem' tức là đồng ý trả lại đồ về chỗ cũ." }
    ]
  },

  // ==========================================
  // BÀI 48 (Gift Certificate)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Sparkling Creek Coffeehouse & Grill</b><br><b>Gift Certificate</b><br><br><b>Presented to:</b> Natasha Tucker<br><b>Amount:</b> $75<br><b>From:</b> Hua Xie<br><b>Message:</b> Thank you for your help with my article. You did a great job editing!<br><b>Authorized by:</b> Jenny Lance"
    ],
    questions: [
      { text: "Why was Ms. Tucker given a gift certificate?", options: { A: "To acknowledge good work at a restaurant", B: "To express gratitude for help that was provided", C: "To authorize a reward", D: "To repay a loan" }, correct: "B", explanation: "Trong lời nhắn ghi 'Thank you for your help with my article' -> Thể hiện sự biết ơn vì sự giúp đỡ đã được cung cấp." },
      { text: "Who most likely is Ms. Lance?", options: { A: "An employee at a restaurant", B: "A friend of Ms. Tucker's", C: "An editor", D: "Ms. Xie's assistant" }, correct: "A", explanation: "Bà Lance là người ký ủy quyền ('Authorized by') cho thẻ quà tặng của nhà hàng -> Bà ấy là nhân viên/quản lý nhà hàng." }
    ]
  },

  // ==========================================
  // BÀI 49 (Welcome E-mail)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Welcome E-mail Checklist</b><br>&#9744; Warmly welcome new staff to our team<br>&#9744; Include dates for training sessions<br>&#9744; Include daily training schedule (as attachment)<br>&#9744; Provide phone numbers of mentors<br>&#9744; Create list of documents to bring<br><br><b>Onboarding</b><br>&#9744; Announce start dates<br>&#9744; Include information about social gathering to welcome new hires and allow them to meet company leaders<br>&#9744; Contact the Technology Team to create e-mail accounts<br>&#9744; Prepare new ID badges and keys<br>&#9744; Prepare benefit packages (health insurance and retirement)<br>&#9744; Personally meet new hires upon their arrival"
    ],
    questions: [
      { text: "What is the purpose of the checklist?", options: { A: "To announce a new e-mail system", B: "To prepare for new employees", C: "To assist people who are leaving a company", D: "To notify trainers of a schedule" }, correct: "B", explanation: "Danh sách này gồm các công việc chào đón nhân viên mới (new staff / new hires) -> Chuẩn bị cho nhân viên mới." },
      { text: "What is one goal of the social gathering?", options: { A: "To meet managers", B: "To learn about benefits", C: "To receive identification documents", D: "To begin training exercises" }, correct: "A", explanation: "Mục đích buổi giao lưu là 'allow them to meet company leaders' (để họ gặp gỡ lãnh đạo công ty) -> Gặp các nhà quản lý (managers)." }
    ]
  },

  // ==========================================
  // BÀI 50 (Service Request Form)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>SERVICE REQUEST FORM</b><br>Complete all fields and deliver to Technology Services (room 412).<br><br><b>Requester Name:</b> Elenora Deckow<br><b>Requester Office:</b> Room 718<br><b>Service Location:</b> Room 500<br><b>Service Type:</b> Repair<br><br><b>Description of Request</b><br>There is a problem with the television audio. When I played an online video, the image was fine, but I could not hear anything... I'm supposed to deliver a product demonstration for a client in room 500 next Monday, so I would greatly appreciate it if the issue can be fixed by this Friday."
    ],
    questions: [
      { text: "Why was the form submitted?", options: { A: "An image is not displaying clearly.", B: "A projector needs to be set up.", C: "Audio is not functioning properly.", D: "A microphone needs to be repaired." }, correct: "C", explanation: "Có vấn đề với âm thanh TV ('problem with the television audio', 'could not hear anything')." },
      { text: "What is Ms. Deckow planning to do next week?", options: { A: "Visit a client site", B: "Deliver a product", C: "Create an online video", D: "Give a presentation" }, correct: "D", explanation: "Cô ấy định 'deliver a product demonstration' (thực hiện buổi trình bày/giới thiệu sản phẩm) -> Nghĩa là thuyết trình." }
    ]
  },

  // ==========================================
  // BÀI 51 (Meeting Minutes)
  // ==========================================
  {
    type: "Single Passage",
    texts: [
      "<b>Meeting Minutes—August 10</b><br><br><b>In attendance:</b> Miguel Luna, Jennifer Lin, Amal Taylor, Vladimir Ikram, Nevena Ivanova<br><br>Amal Taylor, the product manager, opened the meeting. She reported that our new line of herbal teas will be on local store shelves and in restaurants starting September 25. The initial launch includes three flavors: peppermint, lemon ginger, and hibiscus flower. More varieties are expected to be added next year.<br><br>Next, Miguel Luna shared his prototypes of the tea boxes and discussed the sustainability of the materials used to produce them. The colorful designs received positive feedback from meeting attendees.<br><br>After that, Jennifer Lin provided a brief overview of the marketing budget for the product launch... For more detailed information about the marketing budget, contact Ms. Lin directly.<br><br>Finally, Vladimir Ikram led a discussion about advertising options. The final decision was to start with print advertisements in <i>The Southtown Times</i>."
    ],
    questions: [
      { text: "What does the company intend to do in the future?", options: { A: "Open a series of tea shops", B: "Expand its product line", C: "Develop beverages other than tea", D: "Replace the current tea varieties" }, correct: "B", explanation: "Đoạn đầu ghi 'More varieties are expected to be added next year' (Nhiều hương vị khác dự kiến được thêm vào năm tới) -> Mở rộng dòng sản phẩm." },
      { text: "Who most likely is Mr. Luna?", options: { A: "A shipping clerk", B: "A factory supervisor", C: "A store owner", D: "A packaging designer" }, correct: "D", explanation: "Mr. Luna 'shared his prototypes of the tea boxes' (chia sẻ mẫu thiết kế hộp trà) -> Là người thiết kế bao bì." },
      { text: "Who can provide information about the marketing budget?", options: { A: "Ms. Lin", B: "Ms. Taylor", C: "Mr. Ikram", D: "Ms. Ivanova" }, correct: "A", explanation: "Biên bản họp ghi 'contact Ms. Lin directly' (liên hệ trực tiếp Ms. Lin) để biết thông tin ngân sách." },
      { text: "Where will the products initially be advertised?", options: { A: "In a newspaper", B: "In an online magazine", C: "On the radio", D: "On social media" }, correct: "A", explanation: "Họ quyết định quảng cáo in trên tờ báo The Southtown Times ('print advertisements in The Southtown Times')." }
    ]
  }
]; // <--- CHÚ Ý: DẤU NGOẶC VUÔNG VÀ CHẤM PHẨY KẾT THÚC TẠI ĐÂY