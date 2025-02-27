// datajson.js

const lang = [
  {
    good_morning: {
      th: "สวัสดียามเช้า",
      en: "Good Morning",
    },
  },
  {
    good_afternoon: {
      th: "สวัสดียามบ่าย",
      en: "Good Afternoon",
    },
  },
  {
    good_evening: {
      th: "สวัสดียามเย็น",
      en: "Good Evening",
    },
  },
  {
    home: {
      th: "หน้าหลัก",
      en: "Home",
    },
  },
  {
    calendar: {
      th: "ปฏิทิน",
      en: "Calendar",
    },
  },
  {
    request: {
      th: "คำขอ",
      en: "Request",
    },
  },
  {
    notification: {
      th: "การแจ้งเตือน",
      en: "Notification",
    },
  },
  {
    setting: {
      th: "ตั้งค่า",
      en: "Setting",
    },
  },

  {
    activity_today: {
      th: "มาดูกิจกรรมของคุณวันนี้กันเถอะ",
      en: "Let’s take a look at your activity today.",
    },
  },
  {
    quick_menu: {
      th: "เมนูลัด",
      en: "Quick Menu",
    },
  },
  {
    menu: {
      th: "เมนู",
      en: "Menu",
    },
  },
  {
    my_day: {
      th: "วันของฉัน",
      en: "My Day",
    },
  },
  {
    today: {
      th: "วันนี้",
      en: "Today",
    },
  },
  {
    yesterday: {
      th: "เมื่อวาน",
      en: "Yesterday",
    },
  },
  {
    tomorrow: {
      th: "พรุ่งนี้",
      en: "Tomorrow",
    },
  },
  {
    my_tasks: {
      th: "งานของฉัน",
      en: "My Tasks",
    },
  },
  {
    detail: {
      th: "รายละเอียด",
      en: "Detail",
    },
  },
  {
    due_date: {
      th: "วันครบกำหนด",
      en: "Due Date",
    },
  },
  {
    high: {
      th: "สูง",
      en: "High",
    },
  },
  {
    medium: {
      th: "ปานกลาง",
      en: "Medium",
    },
  },
  {
    low: {
      th: "ต่ำ",
      en: "Low",
    },
  },
  {
    new_todo_item: {
      th: "เพิ่มสิ่งที่ต้องทำ",
      en: "New To Do List",
    },
  },
  {
    todo_list: {
      th: "รายการที่ต้องทำ",
      en: "To Do List",
    },
  },
  {
    sort_by: {
      th: "เรียงตาม",
      en: "Sort by",
    },
  },
  {
    priority: {
      th: "ลำดับความสำคัญ",
      en: "Priority",
    },
  },
  {
    link_to_okr: {
      th: "คุณต้องการเชื่อมโยงกับ OKR ของคุณหรือไม่?",
      en: "Do you want to link to your OKR?",
    },
  },
  {
    objective: {
      th: "วัตถุประสงค์",
      en: "Objective",
    },
  },
  {
    okr: {
      th: "OKR",
      en: "OKR",
    },
  },
  {
    all_completed_items: {
      th: "รายการที่เสร็จสมบูรณ์ทั้งหมด",
      en: "All Completed Items",
    },
  },
  {
    completed_items: {
      th: "รายการที่เสร็จสมบูรณ์",
      en: "Completed Items",
    },
  },
  {
    add_items: {
      th: "เพิ่มรายการ",
      en: "Add items",
    },
  },
  {
    title: {
      th: "หัวข้อ",
      en: "Title",
    },
  },
  {
    add_your_title: {
      th: "เพิ่มหัวข้อของคุณ",
      en: "Add your title",
    },
  },
  {
    description: {
      th: "คำอธิบาย",
      en: "Description",
    },
  },
  {
    add_your_description: {
      th: "เพิ่มคำอธิบายของคุณ",
      en: "Add your description",
    },
  },
  {
    delete: {
      th: "ลบ",
      en: "Delete",
    },
  },
  {
    leave_balance: {
      th: "ยอดคงเหลือวันลา",
      en: "Leave Balance",
    },
  },
  {
    d: {
      th: "วัน",
      en: "d",
    },
  },
  {
    h: {
      th: "ชม.",
      en: "h",
    },
  },
  {
    m: {
      th: "น.",
      en: "m",
    },
  },
  {
    my_team_overview: {
      th: "ภาพรวมทีมของฉัน",
      en: "My Team Overview",
    },
  },
  {
    present: {
      th: "ปัจจุบัน",
      en: "Present",
    },
  },
  {
    no_clock_info: {
      th: "ไม่มีข้อมูลนาฬิกา",
      en: "No Clock Info",
    },
  },
  {
    view_all: {
      th: "ดูทั้งหมด",
      en: "View All",
    },
  },
  {
    manage_widget: {
      th: "จัดการวิดเจ็ต",
      en: "Manage Widget",
    },
  },
  {
    in: {
      th: "เข้า",
      en: "In",
    },
  },
  {
    out: {
      th: "ออก",
      en: "Out",
    },
  },
  {
    done: {
      th: "เสร็จสิ้น",
      en: "Done",
    },
  },
  {
    save: {
      th: "บันทึก",
      en: "Save",
    },
  },
  {
    cancel: {
      th: "ยกเลิก",
      en: "Cancel",
    },
  },
  {
    of: {
      th: "ของ",
      en: "of",
    },
  },
  {
    there_must_be_at_least_1_menu: {
      th: "ต้องมีอย่างน้อย 1 เมนู",
      en: "There must be at least 1 menu.",
    },
  },
  {
    you_can_add_up_to_8_menu: {
      th: "สามารถเพิ่มเมนูได้สูงสุด 8 เมนู",
      en: "You can add up to 8 menu.",
    },
  },
];

const quickmenu = ["M00", "M01", "M02", "M05", "M06"];

const leavebalance = [
  {
    id: "03",
    leave_name: {
      th: "Unpaid Leave",
      en: "Unpaid Leave",
    },
    leave_total: "5 -0:0",
    leave_used: "2 -0:0",
    leave_remaining: "3 -0:0",
    remaining_leave_percent: "60.00",
  },
  {
    id: "02",
    leave_name: {
      th: "Sick Leave",
      en: "Sick Leave",
    },
    leave_total: "10 -4:30",
    leave_used: "10 -4:00",
    leave_remaining: "0 -0:30",
    remaining_leave_percent: "0.08",
  },
  {
    id: "01",
    leave_name: {
      th: "Incentive Leave",
      en: "Incentive Leave",
    },
    leave_total: "1 -0:0",
    leave_used: "0 -0:0",
    leave_remaining: "1 -0:0",
    remaining_leave_percent: "100.00",
  },
];

const news = [
  {
    New_ID: 11.0,
    New_Head: "Important Document for Operations",
    New_Detail:
      "Please review the attached file for essential information regarding operational procedures and best practices.",
    New_email: "",
    New_date: "2024-12-24T00:00:00",
    New_pic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCViFCnLqddCN7uHZrEQ1u20IOBbAzvM4JA&s",
    NewsGroupNameT: "ฉุกเฉิน",
    NewsGroupNameE: "Urgent",
  },
  {
    New_ID: 10.0,
    New_Head: "Important Announcement",
    New_Detail:
      "Please be informed about the latest updates and changes. Check your email for further details.",
    New_email: "aulyeve@gmail.com",
    New_date: "2024-12-02T00:00:00",
    New_pic: "",
    NewsGroupNameT: "ฉุกเฉิน",
    NewsGroupNameE: "Urgent",
  },
  {
    New_ID: 9.0,
    New_Head: "System Maintenance Notification",
    New_Detail:
      "Scheduled maintenance will take place on October 10, 2024. Please be aware of possible service interruptions.",
    New_email: "",
    New_date: "2024-10-10T00:00:00",
    New_pic: "https://mini-game.org/wp-content/uploads/2021/11/1-1.jpg",
    NewsGroupNameT: "ฉุกเฉิน",
    NewsGroupNameE: "Urgent",
  },
];

const managewidget = [
  { id: 1, name: "quick_menu", enabled: true },
  { id: 6, name: "my_team_overview", enabled: true },
  { id: 5, name: "leave_balance", enabled: true },
  { id: 2, name: "my_day", enabled: true },
  { id: 3, name: "my_tasks", enabled: true },
  { id: 4, name: "todo_list", enabled: true },
];

const notifications = [
  {
    icon: "Nodata",
    name: "All Items",
    count: 140,
    sub_items: [],
  },
  {
    icon: "TimeRequest",
    name: "Time Request",
    count: 50,
    sub_items: [
      { name: "Leave", count: 10 },
      { name: "Record Time", count: 15 },
      { name: "Overtime", count: 5 },
      { name: "Shift Swap", count: 10 },
      { name: "Change Day Off", count: 10 },
    ],
  },
  {
    icon: "Claim",
    name: "Claim Requests",
    count: 30,
    sub_items: [
      { name: "Welfare", count: 10 },
      { name: "Expense", count: 15 },
      { name: "Advance Payroll", count: 5 },
    ],
  },
  {
    icon: "MyDocument",
    name: "Documents",
    count: 20,
    sub_items: [],
  },
  {
    icon: "EmployeeMovement",
    name: "Employee Movements",
    count: 25,
    sub_items: [],
  },
  {
    icon: "PerformanceEvaluationForm",
    name: "Evaluations",
    count: 0,
    sub_items: [],
  },
];

// const leaverequest = [
//   {
//     name: "Isabella James",
//     leaveType: "Sick Leave",
//     duration: "7 Hours 30 Mins",
//     dateRange: "15/10/2024 09:00 - 17:30",
//     reason: "Accident",
//     profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
//     summary: "There was an accident on the",
//     file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//     transactionSteps: [
//       {
//         id: 3,
//         statusname: "Approved",
//         name: "Ashley Harrison",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-16 14:20:00.000000",
//       },
//       {
//         id: 2,
//         statusname: "Approval",
//         name: "Amanda Bella",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-15 10:45:45.123456",
//       },
//       {
//         id: 0,
//         statusname: "Request",
//         name: "Isabella James",
//         status: 0,
//         isActive: true,
//         datetimeActive: "2024-10-15 09:00:00.000000",
//       },
//     ],
//   },
//   {
//     name: "Lincoln Butler",
//     leaveType: "Annual Leave",
//     duration: "2 Days",
//     dateRange: "13/10/2024 - 14/10/2024",
//     reason: "Personal Business",
//     profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
//     summary: "",
//     file: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
//     transactionSteps: [
//       {
//         id: 1,
//         statusname: "Request",
//         name: "Lincoln Butler",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-13 08:00:00.000000",
//       },
//       {
//         id: 2,
//         statusname: "Approval",
//         name: "Amanda Bella",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-14 09:30:00.000000",
//       },
//       {
//         id: 3,
//         statusname: "Rejected",
//         name: "Ashley Harrison",
//         status: 2,
//         isActive: true,
//         datetimeActive: "2024-10-14 15:00:00.000000",
//       },
//     ],
//   },
//   {
//     name: "Calvin Floyd",
//     leaveType: "Business Leave",
//     duration: "4 Hours",
//     dateRange: "12/10/2024 Second Half",
//     reason: "",
//     profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
//     summary: "",
//     file: "https://www.orimi.com/pdf-test.pdf",
//     transactionSteps: [
//       {
//         id: 1,
//         statusname: "Request",
//         name: "Calvin Floyd",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-12 13:00:00.000000",
//       },
//       {
//         id: 2,
//         statusname: "Rejected",
//         name: "Amanda Bella",
//         status: 2,
//         isActive: true,
//         datetimeActive: "2024-10-12 14:45:00.000000",
//       },
//       {
//         id: 3,
//         statusname: "Waiting for Approval 2",
//         name: "Ashley Harrison",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-13 10:00:00.000000",
//       },
//       {
//         id: 4,
//         statusname: "Waiting for Approval 3",
//         name: "Ashley Harrison2",
//         status: 1,
//         isActive: true,
//         datetimeActive: "2024-10-13 10:00:00.000000",
//       },
//     ],
//   },
//   {
//     name: "Calvin Floyd2",
//     leaveType: "Business Leave2",
//     duration: "4 Hours",
//     dateRange: "12/10/2024 Second Half",
//     reason: "",
//     profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
//     summary: "",
//     file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//     transactionSteps: [
//       {
//         id: 1,
//         statusname: "Request",
//         name: "Calvin Floyd2",
//         status: 0,
//         isActive: true,
//         datetimeActive: "2024-10-12 13:00:00.000000",
//       },
//       {
//         id: 2,
//         statusname: "Waiting for Approval",
//         name: "Amanda Bella2",
//         status: 0,
//         isActive: false,
//         datetimeActive: "2024-10-12 14:45:00.000000",
//       },
//       {
//         id: 3,
//         statusname: "Waiting for Approval 3",
//         name: "Ashley Harrison2",
//         status: 0,
//         isActive: false,
//         datetimeActive: "2024-10-13 10:00:00.000000",
//       },
//       {
//         id: 4,
//         statusname: "Waiting for Approval 2",
//         name: "Ashley2",
//         status: 0,
//         isActive: false,
//         datetimeActive: "2024-10-13 10:00:00.000000",
//       },
//     ],
//   },
// ];

const leaverequest = [
  {
    name: "Isabella James",
    leaveType: "Sick Leave",
    duration: "7 Hours 30 Mins",
    dateRange: "15/10/2024 09:00 - 17:30",
    reason: "Accident",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    summary: "There was an accident on the",
    file: "https://www.orimi.com/pdf-test.pdf",
    transactionSteps: [
      {
        id: 3,
        statusname: "Approved",
        name: "Ashley Harrison",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-16 14:20:00.000000",
      },
      {
        id: 2,
        statusname: "Approval",
        name: "Amanda Bella",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-15 10:45:45.123456",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Isabella James",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-15 09:00:00.000000",
      },
    ],
  },
  {
    name: "Lincoln Butler",
    leaveType: "Annual Leave",
    duration: "2 Days",
    dateRange: "13/10/2024 - 14/10/2024",
    reason: "Personal Business",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    summary: "",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Lincoln Butler",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-13 08:00:00.000000",
      },
      {
        id: 2,
        statusname: "Approval",
        name: "Amanda Bella",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-14 09:30:00.000000",
      },
      {
        id: 3,
        statusname: "Rejected",
        name: "Ashley Harrison",
        status: 2,
        isActive: true,
        datetimeActive: "2024-10-14 15:00:00.000000",
      },
    ],
  },
  {
    name: "Calvin Floyd",
    leaveType: "Business Leave",
    duration: "4 Hours",
    dateRange: "12/10/2024 Second Half",
    reason: "",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    summary: "",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Calvin Floyd",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-12 13:00:00.000000",
      },
      {
        id: 2,
        statusname: "Rejected",
        name: "Amanda Bella",
        status: 2,
        isActive: true,
        datetimeActive: "2024-10-12 14:45:00.000000",
      },
      {
        id: 3,
        statusname: "Waiting for Approval 3",
        name: "Ashley Harrison",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
      {
        id: 4,
        statusname: "Waiting for Approval 2",
        name: "Ashley Harrison2",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
    ],
  },
  {
    name: "Calvin Floyd2",
    leaveType: "Business Leave2",
    duration: "4 Hours",
    dateRange: "12/10/2024 Second Half",
    reason: "",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    summary: "",
    file: "https://www.orimi.com/pdf-test.pdf",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Calvin Floyd2",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-12 13:00:00.000000",
      },
      {
        id: 2,
        statusname: "Waiting for Approval",
        name: "Amanda Bella2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-12 14:45:00.000000",
      },
      {
        id: 3,
        statusname: "Waiting for Approval 3",
        name: "Ashley Harrison2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
      {
        id: 4,
        statusname: "Waiting for Approval 2",
        name: "Ashley Harrison2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
    ],
  },
];

const overtime = [
  {
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Isabella James",
    dateRange: "15/10/2024 09:00 - 17:30",
    overtimeType: "Overtime Pay",
    duration: "4 Hours",
    dates: "13/10/2024",
    time: ["19:00 - 22:00", "23:00 - 01:00"],
    blog: "Assign additional tasks",
    remark: "Working overtime",
    allowance: [
      "Meal (According to Policy)",
      "Transport (100.00 Unit)",
      "Special (50 Unit)",
    ],
    file: "https://www.orimi.com/pdf-test.pdf",
    transactionSteps: [
      {
        id: 3,
        statusname: "Approved",
        name: "Ashley Harrison",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-16 14:20:00.000000",
      },
      {
        id: 2,
        statusname: "Approval",
        name: "Amanda Bella",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-15 10:45:45.123456",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Isabella James",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-15 09:00:00.000000",
      },
    ],
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Ethan Carter",
    dateRange: "20/10/2024 08:30 - 18:00",
    overtimeType: "Compensatory Off",
    duration: "3 Hours",
    dates: "18/10/2024",
    time: ["18:30 - 21:30"],
    blog: "Urgent client support",
    remark: "Handled critical issues",
    allowance: ["Meal (According to Policy)"],
    file: "https://www.orimi.com/pdf-test.pdf",
    transactionSteps: [
      {
        id: 2,
        statusname: "Waiting for Approval",
        name: "Sarah Adams",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-20 14:30:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Ethan Carter",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-20 08:30:00.000000",
      },
    ],
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sophia Martinez",
    dateRange: "25/10/2024 10:00 - 19:00",
    overtimeType: "Overtime Pay",
    duration: "5 Hours",
    dates: "24/10/2024",
    time: ["20:00 - 01:00"],
    blog: "System upgrade deployment",
    remark: "Worked on server maintenance",
    allowance: ["Meal (According to Policy)", "Transport (120.00 Unit)"],
    file: "https://www.orimi.com/pdf-test.pdf",
    transactionSteps: [
      {
        id: 3,
        statusname: "Waiting for Approval 2",
        name: "David Wilson",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-26 08:00:00.000000",
      },
      {
        id: 2,
        statusname: "Waiting for Approval",
        name: "Olivia Brown",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-25 16:00:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Sophia Martinez",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-25 10:00:00.000000",
      },
    ],
  },
];

const recordtime = [
  {
    name: "Lincoln Bulter",
    position: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    dateRange: "25/10/2024 10:00 - 19:00",
    recordimeType: "Onsite Client Project Implementation",
    duration: "3 Days",
    transactionSteps: [
      {
        id: 3,
        statusname: "Waiting for Approval 2",
        name: "David Wilson",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-26 08:00:00.000000",
      },
      {
        id: 2,
        statusname: "Waiting for Approval",
        name: "Olivia Brown",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-25 16:00:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Sophia Martinez",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-25 10:00:00.000000",
      },
    ],
    onDutyInfo: {
      client: "Humanica Public Company (C2005)",
      project: "Humanica (IN240001)",
      destination: "AA Company Ltd.",
      city: "Bangkok",
      country: "Thailand",
      effectiveDate: "28/10/2024 09:00 - 14:00",
      purpose: "Support Client UAT",
      attachment: "https://www.orimi.com/pdf-test.pdf",
    },
    reference: {
      transactionId: "MCR20241012352",
      allowance: ["Meal (According to Policy)", "Transport (120.00 Unit)"],
      claims: ["Plane Ticket 6,000 THB", "Cash 5,000 THB", "Hotel 8,000 THB"],
      summary: {
        "Total Duration": "3 Days",
        "Total Allowance": "8,700 THB",
        "Total Claims": "19,000 THB",
        "Total Amount": "27,700 THB",
      },
    },
  },
  {
    name: "Emma Watson",
    position: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    dateRange: "10/11/2024 09:00 - 18:00",
    recordimeType: "Remote Work",
    duration: "1 Day",
    transactionSteps: [
      {
        id: 2,
        statusname: "Waiting for Approval 2",
        name: "James Miller",
        status: 0,
        isActive: false,
        datetimeActive: "2024-11-10 17:00:00.000000",
      },
      {
        id: 1,
        statusname: "Waiting for Approval",
        name: "Sophia Turner",
        status: 0,
        isActive: false,
        datetimeActive: "2024-11-10 12:00:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Michael Johnson",
        status: 0,
        isActive: true,
        datetimeActive: "2024-11-10 09:00:00.000000",
      },
    ],
    onDutyInfo: {
      client: "ABC Tech Solutions",
      project: "Cloud Migration",
      destination: "Remote",
      city: "San Francisco",
      country: "USA",
      effectiveDate: "10/11/2024 09:00 - 18:00",
      purpose: "Infrastructure Migration",
      attachment: "https://www.orimi.com/pdf-test.pdf",
    },
    reference: {},
  },
  {
    name: "Liam Anderson",
    position: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    dateRange: "05/12/2024 08:30 - 17:30",
    recordimeType: "Business Meeting",
    duration: "1 Day",
    transactionSteps: [
      {
        id: 2,
        statusname: "Waiting for Approval 2",
        name: "Jessica Lee",
        status: 0,
        isActive: false,
        datetimeActive: "2024-12-05 16:30:00.000000",
      },
      {
        id: 1,
        statusname: "Waiting for Approval",
        name: "Daniel Brown",
        status: 0,
        isActive: false,
        datetimeActive: "2024-12-05 12:00:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Emily Wilson",
        status: 1,
        isActive: true,
        datetimeActive: "2024-12-05 08:30:00.000000",
      },
    ],
    onDutyInfo: {
      client: "XYZ Corporation",
      project: "New Product Launch",
      destination: "XYZ Headquarters",
      city: "London",
      country: "UK",
      effectiveDate: "05/12/2024 08:30 - 17:30",
      purpose: "Stakeholder Presentation",
      attachment: "https://www.orimi.com/pdf-test.pdf",
    },
    reference: {
      transactionId: "MCR20241205321",
      allowance: ["Meal (50 GBP)", "Transport (30 GBP)"],
      claims: ["Hotel 200 GBP", "Flight 400 GBP"],
      summary: {
        "Total Duration": "1 Day",
        "Total Allowance": "80 GBP",
        "Total Claims": "600 GBP",
        "Total Amount": "680 GBP",
      },
    },
  },
  {
    name: "Sophia Lopez",
    position: "HR Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    dateRange: "18/12/2024 09:00 - 18:00",
    recordimeType: "Employee Training",
    duration: "1 Day",
    transactionSteps: [
      {
        id: 2,
        statusname: "Waiting for Approval 2",
        name: "Lucas Green",
        status: 0,
        isActive: false,
        datetimeActive: "2024-12-18 17:00:00.000000",
      },
      {
        id: 1,
        statusname: "Waiting for Approval",
        name: "Sarah White",
        status: 0,
        isActive: false,
        datetimeActive: "2024-12-18 12:30:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Daniel Carter",
        status: 1,
        isActive: true,
        datetimeActive: "2024-12-18 09:00:00.000000",
      },
    ],
    onDutyInfo: {
      client: "HR Solutions Ltd.",
      project: "Leadership Training",
      destination: "Training Center",
      city: "Sydney",
      country: "Australia",
      effectiveDate: "18/12/2024 09:00 - 18:00",
      purpose: "Team Leadership Development",
      attachment: "https://www.orimi.com/pdf-test.pdf",
    },
    reference: {
      transactionId: "MCR20241218789",
      allowance: ["Meal (50 AUD)", "Transport (40 AUD)"],
      claims: ["Hotel 300 AUD", "Workshop Fee 200 AUD"],
      summary: {
        "Total Duration": "1 Day",
        "Total Allowance": "90 AUD",
        "Total Claims": "500 AUD",
        "Total Amount": "590 AUD",
      },
    },
  },
];

const shiftexchange = [
  {
    name: "Sophia Lopez",
    position: "HR Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    dateRange: "18/12/2024 09:00 - 18:00",
    EffectiveDate: "11/12/2024",
    Schedule: "06:00 - 13:00 (SHR0001) (On Duty)",
    ExchangeName: "Helen Campbell",
    ExchangeDate: "12/12/2024",
    ExchangeSchedule: "18:00 - 24:00 (SHR0001) (On Duty)",
    Reason: "Urgent business",
    Remark: "I want to change shifts because I have urgent business.",
    transactionSteps: [
      {
        id: 2,
        statusname: "Approved",
        name: "Lucas Green",
        status: 1,
        isActive: true,
        datetimeActive: "2024-12-18 17:00:00.000000",
      },
      {
        id: 1,
        statusname: "Approval",
        name: "Sarah White",
        status: 1,
        isActive: true,
        datetimeActive: "2024-12-18 12:30:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Daniel Carter",
        status: 0,
        isActive: true,
        datetimeActive: "2024-12-18 09:00:00.000000",
      },
    ],
    ExchangePreview: [
      {
        Name: "Isabella James",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        OriginalSchedule: "11/12/2024, 06:00 - 13:00 (SHR0001) (On Duty)",
        NewSchedule: "12/12/2024, 18:00 - 24:00 (SHR0001) (On Duty)",
      },
      {
        Name: "Ashley Harrison",
        avatar:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        OriginalSchedule: "12/12/2024, 18:00 - 24:00 (SHR0001) (On Duty)",
        NewSchedule: "11/12/2024, 06:00 - 13:00 (SHR0001) (On Duty)",
      },
    ],
  },

  {
    name: "Ethan Walker",
    position: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    dateRange: "20/12/2024 10:00 - 19:00",
    EffectiveDate: "15/12/2024",
    Schedule: "08:00 - 16:00 (SHR0002) (On Duty)",
    ExchangeName: "Olivia Brown",
    ExchangeDate: "16/12/2024",
    ExchangeSchedule: "14:00 - 22:00 (SHR0002) (On Duty)",
    Reason: "Family emergency",
    Remark: "Need to swap shift due to family emergency.",
    transactionSteps: [
      {
        id: 2,
        statusname: "Waiting for Approval 2",
        name: "Michael Roberts",
        status: 0,
        isActive: false,
        datetimeActive: "2024-12-20 18:30:00.000000",
      },
      {
        id: 1,
        statusname: "Waiting for Approval",
        name: "Emma Johnson",
        status: 0,
        isActive: false,
        datetimeActive: "2024-12-20 14:00:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Jacob Lewis",
        status: 0,
        isActive: true,
        datetimeActive: "2024-12-20 10:00:00.000000",
      },
    ],
    ExchangePreview: [
      {
        Name: "William Davis",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        OriginalSchedule: "15/12/2024, 08:00 - 16:00 (SHR0002) (On Duty)",
        NewSchedule: "16/12/2024, 14:00 - 22:00 (SHR0002) (On Duty)",
      },
      {
        Name: "James Wilson",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        OriginalSchedule: "16/12/2024, 14:00 - 22:00 (SHR0002) (On Duty)",
        NewSchedule: "15/12/2024, 08:00 - 16:00 (SHR0002) (On Duty)",
      },
    ],
  },

  {
    name: "Ava Mitchell",
    position: "Finance Analyst",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    dateRange: "22/12/2024 08:00 - 17:00",
    EffectiveDate: "17/12/2024",
    Schedule: "07:00 - 15:00 (SHR0003) (On Duty)",
    ExchangeName: "Noah Carter",
    ExchangeDate: "18/12/2024",
    ExchangeSchedule: "12:00 - 20:00 (SHR0003) (On Duty)",
    Reason: "Doctor's appointment",
    Remark: "Need shift change due to a scheduled medical appointment.",
    transactionSteps: [
      {
        id: 2,
        statusname: "Rejected",
        name: "Sophia Anderson",
        status: 2,
        isActive: true,
        datetimeActive: "2024-12-22 16:30:00.000000",
      },
      {
        id: 1,
        statusname: "Approval",
        name: "Benjamin Harris",
        status: 1,
        isActive: true,
        datetimeActive: "2024-12-22 12:00:00.000000",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Charlotte Adams",
        status: 0,
        isActive: true,
        datetimeActive: "2024-12-22 08:00:00.000000",
      },
    ],
    ExchangePreview: [
      {
        Name: "Mia Thompson",
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
        OriginalSchedule: "17/12/2024, 07:00 - 15:00 (SHR0003) (On Duty)",
        NewSchedule: "18/12/2024, 12:00 - 20:00 (SHR0003) (On Duty)",
      },
      {
        Name: "Evelyn Martinez",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        OriginalSchedule: "18/12/2024, 12:00 - 20:00 (SHR0003) (On Duty)",
        NewSchedule: "17/12/2024, 07:00 - 15:00 (SHR0003) (On Duty)",
      },
    ],
  },
];

const documents = [
  {
    name: "Isabella James",
    documentsType: "Employment Verification Letter",
    dateRange: "15/10/2024 09:00 - 17:30",
    language: "English",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    summary: "Use as supporting documents for submission",

    transactionSteps: [
      {
        id: 3,
        statusname: "Approved",
        name: "Ashley Harrison",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-16 14:20:00.000000",
      },
      {
        id: 2,
        statusname: "Approval",
        name: "Amanda Bella",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-15 10:45:45.123456",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Isabella James",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-15 09:00:00.000000",
      },
    ],
  },

  {
    name: "Calvin Floyd2",
    documentsType: "Salary Verification Letter",
    dateRange: "12/10/2024 Second Half",
    language: "",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    summary: "Use as supporting documents for submission",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Calvin Floyd2",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-12 13:00:00.000000",
      },
      {
        id: 2,
        statusname: "Waiting for Approval",
        name: "Amanda Bella2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-12 14:45:00.000000",
      },
      {
        id: 3,
        statusname: "Waiting for Approval 3",
        name: "Ashley Harrison2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
      {
        id: 4,
        statusname: "Waiting for Approval 2",
        name: "Ashley Harrison2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
    ],
  },
];

const myrequestleave = [
  {
    name: "Isabella James",
    leaveType: "Sick Leave",
    duration: "7 Hours 30 Mins",
    dateRange: "15/10/2024 09:00 - 17:30",
    reason: "Accident",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    summary: "There was an accident on the",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    transactionSteps: [
      {
        id: 3,
        statusname: "Approved",
        name: "Ashley Harrison",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-16 14:20:00.000000",
      },
      {
        id: 2,
        statusname: "Approval",
        name: "Amanda Bella",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-15 10:45:45.123456",
      },
      {
        id: 0,
        statusname: "Request",
        name: "Isabella James",
        status: 0,
        isActive: true,
        datetimeActive: "2024-10-15 09:00:00.000000",
      },
    ],
  },
  {
    name: "Lincoln Butler",
    leaveType: "Annual Leave",
    duration: "2 Days",
    dateRange: "13/10/2024 - 14/10/2024",
    reason: "Personal Business",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    summary: "",
    file: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Lincoln Butler",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-13 08:00:00.000000",
      },
      {
        id: 2,
        statusname: "Approval",
        name: "Amanda Bella",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-14 09:30:00.000000",
      },
      {
        id: 3,
        statusname: "Rejected",
        name: "Ashley Harrison",
        status: 2,
        isActive: true,
        datetimeActive: "2024-10-14 15:00:00.000000",
      },
    ],
  },
  {
    name: "Calvin Floyd",
    leaveType: "Business Leave",
    duration: "4 Hours",
    dateRange: "12/10/2024 Second Half",
    reason: "",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    summary: "",
    file: "https://www.orimi.com/pdf-test.pdf",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Calvin Floyd",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-12 13:00:00.000000",
      },
      {
        id: 2,
        statusname: "Rejected",
        name: "Amanda Bella",
        status: 2,
        isActive: true,
        datetimeActive: "2024-10-12 14:45:00.000000",
      },
      {
        id: 3,
        statusname: "Waiting for Approval 2",
        name: "Ashley Harrison",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
      {
        id: 4,
        statusname: "Waiting for Approval 3",
        name: "Ashley Harrison2",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
    ],
  },
  {
    name: "Calvin Floyd2",
    leaveType: "Business Leave2",
    duration: "4 Hours",
    dateRange: "12/10/2024 Second Half",
    reason: "",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    summary: "",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    transactionSteps: [
      {
        id: 1,
        statusname: "Request",
        name: "Calvin Floyd2",
        status: 1,
        isActive: true,
        datetimeActive: "2024-10-12 13:00:00.000000",
      },
      {
        id: 2,
        statusname: "Waiting for Approval",
        name: "Amanda Bella2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-12 14:45:00.000000",
      },
      {
        id: 3,
        statusname: "Waiting for Approval 3",
        name: "Ashley Harrison2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
      {
        id: 4,
        statusname: "Waiting for Approval 2",
        name: "Ashley2",
        status: 0,
        isActive: false,
        datetimeActive: "2024-10-13 10:00:00.000000",
      },
    ],
  },
];

module.exports = {
  leavebalance,
  news,
  quickmenu,
  managewidget,
  lang,
  notifications,
  leaverequest,
  overtime,
  recordtime,
  shiftexchange,
  documents,
  myrequestleave,
};
