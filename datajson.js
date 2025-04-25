// datajson.js

// const lang = [
//   {
//     good_morning: {
//       th: "สวัสดียามเช้า",
//       en: "Good Morning",
//     },
//   },
//   {
//     good_afternoon: {
//       th: "สวัสดียามบ่าย",
//       en: "Good Afternoon",
//     },
//   },
//   {
//     good_evening: {
//       th: "สวัสดียามเย็น",
//       en: "Good Evening",
//     },
//   },
//   {
//     home: {
//       th: "หน้าหลัก",
//       en: "Home",
//     },
//   },
//   {
//     calendar: {
//       th: "ปฏิทิน",
//       en: "Calendar",
//     },
//   },
//   {
//     request: {
//       th: "คำขอ",
//       en: "Request",
//     },
//   },
//   {
//     notification: {
//       th: "การแจ้งเตือน",
//       en: "Notification",
//     },
//   },
//   {
//     setting: {
//       th: "ตั้งค่า",
//       en: "Setting",
//     },
//   },

//   {
//     activity_today: {
//       th: "มาดูกิจกรรมของคุณวันนี้กันเถอะ",
//       en: "Let’s take a look at your activity today.",
//     },
//   },
//   {
//     quick_menu: {
//       th: "เมนูลัด",
//       en: "Quick Menu",
//     },
//   },
//   {
//     menu: {
//       th: "เมนู",
//       en: "Menu",
//     },
//   },
//   {
//     my_day: {
//       th: "วันของฉัน",
//       en: "My Day",
//     },
//   },
//   {
//     today: {
//       th: "วันนี้",
//       en: "Today",
//     },
//   },
//   {
//     yesterday: {
//       th: "เมื่อวาน",
//       en: "Yesterday",
//     },
//   },
//   {
//     tomorrow: {
//       th: "พรุ่งนี้",
//       en: "Tomorrow",
//     },
//   },
//   {
//     my_tasks: {
//       th: "งานของฉัน",
//       en: "My Tasks",
//     },
//   },
//   {
//     detail: {
//       th: "รายละเอียด",
//       en: "Detail",
//     },
//   },
//   {
//     due_date: {
//       th: "วันครบกำหนด",
//       en: "Due Date",
//     },
//   },
//   {
//     high: {
//       th: "สูง",
//       en: "High",
//     },
//   },
//   {
//     medium: {
//       th: "ปานกลาง",
//       en: "Medium",
//     },
//   },
//   {
//     low: {
//       th: "ต่ำ",
//       en: "Low",
//     },
//   },
//   {
//     new_todo_item: {
//       th: "เพิ่มสิ่งที่ต้องทำ",
//       en: "New To Do List",
//     },
//   },
//   {
//     todo_list: {
//       th: "รายการที่ต้องทำ",
//       en: "To Do List",
//     },
//   },
//   {
//     sort_by: {
//       th: "เรียงตาม",
//       en: "Sort by",
//     },
//   },
//   {
//     priority: {
//       th: "ลำดับความสำคัญ",
//       en: "Priority",
//     },
//   },
//   {
//     link_to_okr: {
//       th: "คุณต้องการเชื่อมโยงกับ OKR ของคุณหรือไม่?",
//       en: "Do you want to link to your OKR?",
//     },
//   },
//   {
//     objective: {
//       th: "วัตถุประสงค์",
//       en: "Objective",
//     },
//   },
//   {
//     okr: {
//       th: "OKR",
//       en: "OKR",
//     },
//   },
//   {
//     all_completed_items: {
//       th: "รายการที่เสร็จสมบูรณ์ทั้งหมด",
//       en: "All Completed Items",
//     },
//   },
//   {
//     completed_items: {
//       th: "รายการที่เสร็จสมบูรณ์",
//       en: "Completed Items",
//     },
//   },
//   {
//     add_items: {
//       th: "เพิ่มรายการ",
//       en: "Add items",
//     },
//   },
//   {
//     title: {
//       th: "หัวข้อ",
//       en: "Title",
//     },
//   },
//   {
//     add_your_title: {
//       th: "เพิ่มหัวข้อของคุณ",
//       en: "Add your title",
//     },
//   },
//   {
//     description: {
//       th: "คำอธิบาย",
//       en: "Description",
//     },
//   },
//   {
//     add_your_description: {
//       th: "เพิ่มคำอธิบายของคุณ",
//       en: "Add your description",
//     },
//   },
//   {
//     delete: {
//       th: "ลบ",
//       en: "Delete",
//     },
//   },
//   {
//     leave_balance: {
//       th: "ยอดคงเหลือวันลา",
//       en: "Leave Balance",
//     },
//   },
//   {
//     d: {
//       th: "วัน",
//       en: "d",
//     },
//   },
//   {
//     h: {
//       th: "ชม.",
//       en: "h",
//     },
//   },
//   {
//     m: {
//       th: "น.",
//       en: "m",
//     },
//   },
//   {
//     my_team_overview: {
//       th: "ภาพรวมทีมของฉัน",
//       en: "My Team Overview",
//     },
//   },
//   {
//     present: {
//       th: "ปัจจุบัน",
//       en: "Present",
//     },
//   },
//   {
//     no_clock_info: {
//       th: "ไม่มีข้อมูลนาฬิกา",
//       en: "No Clock Info",
//     },
//   },
//   {
//     view_all: {
//       th: "ดูทั้งหมด",
//       en: "View All",
//     },
//   },
//   {
//     manage_widget: {
//       th: "จัดการวิดเจ็ต",
//       en: "Manage Widget",
//     },
//   },
//   {
//     in: {
//       th: "เข้า",
//       en: "In",
//     },
//   },
//   {
//     out: {
//       th: "ออก",
//       en: "Out",
//     },
//   },
//   {
//     done: {
//       th: "เสร็จสิ้น",
//       en: "Done",
//     },
//   },
//   {
//     save: {
//       th: "บันทึก",
//       en: "Save",
//     },
//   },
//   {
//     cancel: {
//       th: "ยกเลิก",
//       en: "Cancel",
//     },
//   },
//   {
//     of: {
//       th: "ของ",
//       en: "of",
//     },
//   },
//   {
//     there_must_be_at_least_1_menu: {
//       th: "ต้องมีอย่างน้อย 1 เมนู",
//       en: "There must be at least 1 menu.",
//     },
//   },
//   {
//     you_can_add_up_to_8_menu: {
//       th: "สามารถเพิ่มเมนูได้สูงสุด 8 เมนู",
//       en: "You can add up to 8 menu.",
//     },
//   },
// ];



// !!!!!!!!
const lang = [
  {
    "Welcome": {
      "th": "ยินดีต้อนรับ",
      "en": "Welcome"
    },
    "Quick Menu": {
      "th": "เมนูด่วน",
      "en": "Quick Menu"
    },
    "Payslip": {
      "th": "ใบแจ้งเงินเดือน",
      "en": "Payslip"
    },
    "My calendar": {
      "th": "ปฏิทินของฉัน",
      "en": "My calendar"
    },
    "Leave request": {
      "th": "คำขอลา",
      "en": "Leave request"
    },
    "Overtime request": {
      "th": "คำขอทำงานล่วงเวลา",
      "en": "Overtime request"
    },
    "Employee profile": {
      "th": "ประวัติพนักงาน",
      "en": "Employee profile"
    },
    "Claim request": {
      "th": "คำขอเบิกค่าใช้จ่าย",
      "en": "Claim request"
    },
    "My document": {
      "th": "เอกสารของฉัน",
      "en": "My document"
    },
    "Shift exchange": {
      "th": "เปลี่ยนกะการทำงาน",
      "en": "Shift exchange"
    },
    "Record time request": {
      "th": "บันทึกเวลาทำงาน",
      "en": "Record time request"
    },
    "Welfare request": {
      "th": "คำขอสวัสดิการ",
      "en": "Welfare request"
    },
    "Advance payroll": {
      "th": "เบิกเงินล่วงหน้า",
      "en": "Advance payroll"
    },
    "Save": {
      "th": "บันทึก",
      "en": "Save"
    },
    "Leave Balance": {
      "th": "วันลาคงเหลือ",
      "en": "Leave Balance"
    },
    "Annual Leave": {
      "th": "ลาพักร้อน",
      "en": "Annual Leave"
    },
    "Sick Leave": {
      "th": "ลาปวย",
      "en": "Sick Leave"
    },
    "Business Leave": {
      "th": "ลากิจ",
      "en": "Business Leave"
    },
   
    "My Team Overview": {
      "th": "ภาพรวมของทีม",
      "en": "My Team Overview"
    },
    "Present": {
      "th": "เข้างาน",
      "en": "Present"
    },
    "No clock info": {
      "th": "ไม่มีข้อมูลเวลา",
      "en": "No clock info"
    },
    "View all": {
      "th": "ดูทั้งหมด",
      "en": "View all"
    },
    "Manage Widgets": {
      "th": "จัดการวิดเจ็ต",
      "en": "Manage Widgets"
    },
    "Done": {
      "th": "เสร็จสิ้น",
      "en": "Done"
    },
    "My Calendar": {
      "th": "ปฏิทินของฉัน",
      "en": "My Calendar"
    },
  
    
    "My Tasks": {
      "th": "สิ่งที่ต้องทำ",
      "en": "My Tasks"
    },
    "Tasks": {
      "th": "สิ่งที่ต้องทำ",
      "en": "Tasks"
    },
    "Priority": {
      "th": "ลำดับความสำคัญ",
      "en": "Priority"
    },
    "High": {
      "th": "สูง",
      "en": "High"
    },
    "Medium": {
      "th": "ปานกลาง",
      "en": "Medium"
    },
    "Low": {
      "th": "ต่ำ",
      "en": "Low"
    },
    "Due Date": {
      "th": "วันครบกำหนด",
      "en": "Due Date"
    },
    "Sort by: due date": {
      "th": "เรียงตาม: วันครบกำหนด",
      "en": "Sort by: due date"
    },
    "Sort by: priority": {
      "th": "เรียงตาม: ลำดับความสำคัญ",
      "en": "Sort by: priority"
    },
    "To Do List": {
      "th": "รายการที่ต้องทำ",
      "en": "To Do List"
    },
    "All Completed Items": {
      "th": "รายการทั้งหมด",
      "en": "All Completed Items"
    },
    "Home": {
      "th": "หน้าหลัก",
      "en": "Home"
    },
    "Employee Profile": {
      "th": "ประวัติพนักงาน",
      "en": "Employee Profile"
    },
    "Team Calendar": {
      "th": "ปฏิทินการทำงานทีม",
      "en": "Team Calendar"
    },
    "Claims": {
      "th": "ค่าใช้จ่าย",
      "en": "Claims"
    },
    "Performance": {
      "th": "ประสิทธิภาพการทำงาน",
      "en": "Performance"
    },
    "Report": {
      "th": "รายงาน",
      "en": "Report"
    },
    "e-Learning": {
      "th": "หลักสูตรออนไลน์",
      "en": "e-Learning"
    },
    "All Items": {
      "th": "ทั้งหมด",
      "en": "All Items"
    },
    "Time Request": {
      "th": "คำขอเวลาปฏิบัติงาน",
      "en": "Time Request"
    },
    "Leave": {
      "th": "เป็นลา",
      "en": "Leave"
    },
    "Record Time": {
      "th": "บันทึกเวลาทำงาน",
      "en": "Record Time"
    },
    "Overtime": {
      "th": "ทำงานล่วงเวลา",
      "en": "Overtime"
    },
    "Change day off": {
      "th": "เปลี่ี่ยนวันหยุด",
      "en": "Change day off"
    },
    "Claim Request": {
      "th": "คำขอเบิกค่าใช้จ่าย",
      "en": "Claim Request"
    },
    "Welfare": {
      "th": "สวัสดิการ",
      "en": "Welfare"
    },
    "Expense": {
      "th": "ค่าใช้จ่าย",
      "en": "Expense"
    },
    "Advance Payroll": {
      "th": "เบิกเงินล่วงหน้า",
      "en": "Advance Payroll"
    },
    "Document": {
      "th": "เอกสาร",
      "en": "Document"
    },
    "Employee Movement": {
      "th": "การโอนย้ายพนักงาน",
      "en": "Employee Movement"
    },
    "Evaluation": {
      "th": "การประเมินผล",
      "en": "Evaluation"
    },
    "My Requests": {
      "th": "คำขอของฉัน",
      "en": "My Requests"
    },
    "All": {
      "th": "ทั้งหมด",
      "en": "All"
    },
    "Read": {
      "th": "อ่านแล้ว",
      "en": "Read"
    },
    "Unread": {
      "th": "ยังไม่อ่าน",
      "en": "Unread"
    },
    "Starred": {
      "th": "รายการโปรด",
      "en": "Starred"
    },
    "Show items pending approval": {
      "th": "แสดงรายการที่รออนุมัติ",
      "en": "Show items pending approval"
    },
    "Waiting for approval": {
      "th": "รออนุมัติ",
      "en": "Waiting for approval"
    },
    "Approved": {
      "th": "อนุมัติ",
      "en": "Approved"
    },
    "Rejected": {
      "th": "ไม่อนุมัติ",
      "en": "Rejected"
    },
    "Request": {
      "th": "คำขอ",
      "en": "Request"
    },
    "All day": {
      "th": "เต็มวัน",
      "en": "All day"
    },
    "First Half": {
      "th": "ลาครึ่งวันแรก",
      "en": "First Half"
    },
    "Second Half": {
      "th": "ลาครึ่ึ่งวันหลัง",
      "en": "Second Half"
    },
    "Hours": {
      "th": "ชั่วโมง",
      "en": "Hours"
    },
    "Request No": {
      "th": "เลขที่คำขอ",
      "en": "Request No."
    },
    "Created date": {
      "th": "วันที่บันทึก",
      "en": "Created date"
    },
    "Leave Type": {
      "th": "ประเภทการลา",
      "en": "Leave Type"
    },
    "Effective Date": {
      "th": "วันที่มีผล",
      "en": "Effective Date"
    },
    "Base Type": {
      "th": "รูปแบบการลา",
      "en": "Base Type"
    },
    "Time": {
      "th": "ระบบเวลา",
      "en": "Time"
    },
    "Total Duration": {
      "th": "ระยะเวลารวม",
      "en": "Total Duration"
    },
    "Leave Reason": {
      "th": "เหตุผลการลา",
      "en": "Leave Reason"
    },
    "Remark": {
      "th": "หมายเหตุ",
      "en": "Remark"
    },
    "Attachment": {
      "th": "แนบไฟล์",
      "en": "Attachment"
    },
    "Date": {
      "th": "วันที่",
      "en": "Date"
    },
    "Employee card ID": {
      "th": "รหัสบัตรรูด",
      "en": "Employee card ID"
    },
    "Status": {
      "th": "สถานะ",
      "en": "Status"
    },
    "Effective date": {
      "th": "วันที่มีผล",
      "en": "Effective date"
    },
    "Total Time": {
      "th": "รวมเวลา",
      "en": "Total Time"
    },
    "Type of Overtime": {
      "th": "ชนิดโอที",
      "en": "Type of Overtime"
    },
    "Pre-shift Overtime": {
      "th": "โอทีก่อนเริ่มงาน",
      "en": "Pre-shift Overtime"
    },
    "Post-shift Overtime": {
      "th": "โอทีหลังเลิกงาน",
      "en": "Post-shift Overtime"
    },
    "Break Overtime": {
      "th": "โอทีพักเที่ยง",
      "en": "Break Overtime"
    },
    "Overtime conditions selection": {
      "th": "ประเภทการจ่ายเงิน",
      "en": "Overtime conditions selection"
    },
    "Paid": {
      "th": "จ่ายเงิน",
      "en": "Paid"
    },
    "Task Name for Overtime": {
      "th": "ชื่องาน",
      "en": "Task Name for Overtime"
    },
    "Current Shift": {
      "th": "กะงานปัจจุบัน",
      "en": "Current Shift"
    },
    "New Shift": {
      "th": "กะงานใหม่",
      "en": "New Shift"
    },
    "Current day off": {
      "th": "วันหยุดเดิม",
      "en": "Current day off"
    },
    "New Day off": {
      "th": "วันหยุุดใหม่",
      "en": "New Day off"
    },
    "Department/Section": {
      "th": "หน่วยงาน/ภาคส่วน",
      "en": "Department/Section"
    },
    "Date of Used": {
      "th": "วันที่ใช้",
      "en": "Date of Used"
    },
    "Welfare Year Used": {
      "th": "ปีสวัสดิการที่ใช้",
      "en": "Welfare Year Used"
    },
    "Welfare Type": {
      "th": "ประเภทสวัสดิการ",
      "en": "Welfare Type"
    },
    "Amount": {
      "th": "จำนวนเงินที่ขอเบิก",
      "en": "Amount"
    },
    "Request Count": {
      "th": "ครั้งที่",
      "en": "Request Count"
    },
    "Total Entitlement": {
      "th": "สิทธิรวม",
      "en": "Total Entitlement"
    },
    "Total Requested": {
      "th": "ยอดรวมที่เบิก",
      "en": "Total Requested"
    },
    "Remaining Entitlement": {
      "th": "คงเหลือตามสิทธิ",
      "en": "Remaining Entitlement"
    },
    "Details": {
      "th": "รายละเอียด",
      "en": "Details"
    },
    "Date of Use": {
      "th": "วันที่ใช้",
      "en": "Date of Use"
    },
    "Expense Type": {
      "th": "ประเภทค่าใช้จ่าย",
      "en": "Expense Type"
    },
    "Claim Count": {
      "th": "ครั้งที่",
      "en": "Claim Count"
    },
    "Total": {
      "th": "ยอดรวมที่เบิก",
      "en": "Total"
    },
    "Entitlement Amount": {
      "th": "สิทธิ์การเบิก",
      "en": "Entitlement Amount"
    },
    "Used Amount": {
      "th": "ใช้ไป",
      "en": "Used Amount"
    },
    "Pending Requests": {
      "th": "การเบิกที่รออนุมัติ",
      "en": "Pending Requests"
    },
    "Request Date": {
      "th": "วันที่ขอเบิก",
      "en": "Request Date"
    },
    "Reason": {
      "th": "เหตุผลการลา",
      "en": "Reason"
    },
    "Documents": {
      "th": "ข้อมูลเอกสาร",
      "en": "Documents"
    },
    "50 bis": {
      "th": "50 ทวิ",
      "en": "50 bis"
    },
    "Employment": {
      "th": "ข้อมูลพนักงาน",
      "en": "Employment"
    },
    "Personal": {
      "th": "ข้อมูลส่วนตัว",
      "en": "Personal"
    },
    "Family": {
      "th": "ครอบครัว",
      "en": "Family"
    },
    "Education": {
      "th": "การศึกษา",
      "en": "Education"
    },
    "Work Experience": {
      "th": "ประวัติการทำงาน",
      "en": "Work Experience"
    },
    "My team": {
      "th": "ทีมของฉัน",
      "en": "My team"
    },
    "Payroll": {
      "th": "ระบบเงินเดือน",
      "en": "Payroll"
    },
    "Filter": {
      "th": "กรองข้อมูล",
      "en": "Filter"
    },
    "Error: This field is required": {
      "th": "ข้อผิดพลาด: กรุณากรอกข้อมูลในช่องนี้",
      "en": "Error: This field is required."
    },
    "Are you sure you want to delete this employee?": {
      "th": "คุณแน่ใจหรือไม่ว่าต้องการลบพนักงานคนนี้?",
      "en": "Are you sure you want to delete this employee?"
    },
    "Cancel": {
      "th": "ยกเลิก",
      "en": "Cancel"
    },
    "Delete": {
      "th": "ลบ",
      "en": "Delete"
    },
    "Success": {
      "th": "สำเร็จ",
      "en": "Success"
    },
    "The employee has been successfully removed": {
      "th": "ลบพนักงานเรียบร้อยแล้ว",
      "en": "The employee has been successfully removed."
    },
    "General": {
      "th": "ข้อมูลทั่วไป",
      "en": "General"
    },
    "Title (TH)": {
      "th": "คำนำหน้า(ไทย)",
      "en": "Title (TH)"
    },
    "First Name (TH)": {
      "th": "ชื่อ(ไทย)",
      "en": "First Name (TH)"
    },
    "Last Name (TH)": {
      "th": "นามสกุล(ไทย)",
      "en": "Last Name (TH)"
    },
    "Title (EN)": {
      "th": "คำนำหน้า(อังกฤษ)",
      "en": "Title (EN)"
    },
    "First Name (EN)": {
      "th": "ชื่อ(อังกฤษ)",
      "en": "First Name (EN)"
    },
    "Last Name (EN)": {
      "th": "นามสกุล(อังกฤษ)",
      "en": "Last Name (EN)"
    },
    "Employee Number": {
      "th": "รหัสพนักงาน",
      "en": "Employee Number"
    },
    "Card ID": {
      "th": "รหัสบัตรบันทึกเวลา",
      "en": "Card ID"
    },
    "Job Title": {
      "th": "ตำแหน่งงาน",
      "en": "Job Title"
    },
    "Start Date": {
      "th": "วันที่เริ่มต้น",
      "en": "Start Date"
    },
    "Service Year": {
      "th": "อายุงาน",
      "en": "Service Year"
    },
    "[YY] years [MM] months [DD] days": {
      "th": "[YY] ปี [MM] เดือน [DD] วัน",
      "en": "[YY] years [MM] months [DD] days"
    },
    "About Me": {
      "th": "เกี่ยวกับฉัน",
      "en": "About Me"
    },
    "Employment Information": {
      "th": "ข้อมูลพนักงาน",
      "en": "Employment Information"
    },
    "Cmb1 [Department]": {
      "th": "Cmb1 [ฝ่าย]",
      "en": "Cmb1 [Department]"
    },
    "Cmb2 [Section]": {
      "th": "Cmb2 [ส่วน]",
      "en": "Cmb2 [Section]"
    },
    "Cmb3 [Division]": {
      "th": "Cmb3 [แผนก]",
      "en": "Cmb3 [Division]"
    },
    "Cmb4 [Employee Level]": {
      "th": "Cmb4 [ระดับพนักงาน]",
      "en": "Cmb4 [Employee Level]"
    },
    "Cmb5 [Work Location]": {
      "th": "Cmb5 [สถานที่ทำงาน]",
      "en": "Cmb5 [Work Location]"
    },
    "Cmb6 [Scope of work]": {
      "th": "Cmb6 [ขอบเขตการทำงาน]",
      "en": "Cmb6 [Scope of work]"
    },
    "Cmb7 [Expense group]": {
      "th": "Cmb7 [กลุ่มค่าใช้จ่าย]",
      "en": "Cmb7 [Expense group]"
    },
    "Cmb8 [Approval group]": {
      "th": "Cmb8 [กลุ่มอนุมัติ]",
      "en": "Cmb8 [Approval group]"
    },
    "Contract Date": {
      "th": "วันเริ่มสัญญา",
      "en": "Contract Date"
    },
    "Employee Type": {
      "th": "ประเภทพนักงาน",
      "en": "Employee Type"
    },
    "Group of Employee": {
      "th": "กลุ่มพนักงาน",
      "en": "Group of Employee"
    },
    "Job Grade": {
      "th": "เกรดงาน",
      "en": "Job Grade"
    },
    "Payroll Type": {
      "th": "ประเภทการจ่ายเงิน",
      "en": "Payroll Type"
    },
    "Employment Type": {
      "th": "ประเภทสัญญาจ้าง",
      "en": "Employment Type"
    },
    "Probation Duration": {
      "th": "จำนวนวันทดลองงาน",
      "en": "Probation Duration"
    },
    "Permanent Date": {
      "th": "วันบรรจุ",
      "en": "Permanent Date"
    },
    "Employment Duration": {
      "th": "อายุงาน",
      "en": "Employment Duration"
    },
    "Contract Number": {
      "th": "เลขที่ี่สัญญาจ้าง",
      "en": "Contract Number"
    },
    "Termination Date": {
      "th": "วันสิ้นสุดสัญญา",
      "en": "Termination Date"
    },
    "Provident Fund Number": {
      "th": "เลขสมาชิกกองทุนฯ",
      "en": "Provident Fund Number"
    },
    "Career Path": {
      "th": "ความก้าวหน้าในสายอาชีพ",
      "en": "Career Path"
    },
    "Promotion": {
      "th": "ปรับตำแหน่ง",
      "en": "Promotion"
    },
    "join": {
      "th": "เริ่มงาน",
      "en": "join"
    },
    "Transfer to other": {
      "th": "โอนย้าย/ปรับเปลี่ยน",
      "en": "Transfer to other"
    },
    "Nickname": {
      "th": "ชื่อเล่น",
      "en": "Nickname"
    },
    "Date of Birth": {
      "th": "วันเกิด",
      "en": "Date of Birth"
    },
    "Age": {
      "th": "อายุ",
      "en": "Age"
    },
    "Gender": {
      "th": "เพศ",
      "en": "Gender"
    },
    "Marital Status": {
      "th": "สถานภาพ",
      "en": "Marital Status"
    },
    "Foreigner Employee": {
      "th": "พนักงานต่างชาติ",
      "en": "Foreigner Employee"
    },
    "Identification Number": {
      "th": "เลขประจำตัวประชาชน",
      "en": "Identification Number"
    },
    "Identification Card Expire": {
      "th": "วันหมดอายุบัตรประชาชน",
      "en": "Identification Card Expire"
    },
    "Tax ID Number": {
      "th": "เลขผู้เสียภาษี",
      "en": "Tax ID Number"
    },
    "SSO Number": {
      "th": "เลขประกันสังคม",
      "en": "SSO Number"
    },
    "Passport Number": {
      "th": "หมายเลขพาสปอร์ต",
      "en": "Passport Number"
    },
    "Issue Date": {
      "th": "วันที่ออกเอกสาร",
      "en": "Issue Date"
    },
    "Expire Date": {
      "th": "วันหมดอายุ",
      "en": "Expire Date"
    },
    "Place of Issue": {
      "th": "สถานที่ี่ออกเอกสาร",
      "en": "Place of Issue"
    },
    "Remarks": {
      "th": "หมายเหตุ",
      "en": "Remarks"
    },
    "Visa Number": {
      "th": "เลขวีซ่า",
      "en": "Visa Number"
    },
    "Work Permit Number": {
      "th": "หมายเลขใบอนุญาตทำงาน",
      "en": "Work Permit Number"
    },
    "Social Security Hospital": {
      "th": "โรงพยาบาล ปกส.",
      "en": "Social Security Hospital"
    },
    "Race": {
      "th": "เชื้อชาติ",
      "en": "Race"
    },
    "Religion": {
      "th": "ศาสนา",
      "en": "Religion"
    },
    "Nationality": {
      "th": "สัญชาติ",
      "en": "Nationality"
    },
    "Marital": {
      "th": "สถานะภาพ",
      "en": "Marital"
    },
    "Military Status": {
      "th": "สถานะทางทหาร",
      "en": "Military Status"
    },
    "Place of Birth": {
      "th": "สถานที่เกิด",
      "en": "Place of Birth"
    },
    "Height": {
      "th": "ส่วนสูง",
      "en": "Height"
    },
    "Weight": {
      "th": "น้ำหนัก",
      "en": "Weight"
    },
    "Driving License": {
      "th": "ใบขับขี่รถยนต์",
      "en": "Driving License"
    },
    "Yes": {
      "th": "มี",
      "en": "Yes"
    },
    "No": {
      "th": "ไม่มี",
      "en": "No"
    },
    "Driving License Number": {
      "th": "เลขที่ใบขับขี่รถจักรยานยนต์",
      "en": "Driving License Number"
    },
    "Date of Issue (Driver's License)": {
      "th": "วันที่ออกใบขับขี่รถจักรยานยนต์",
      "en": "Date of Issue (Driver's License)"
    },
    "Own a Car": {
      "th": "มีรถยนต์",
      "en": "Own a Car"
    },
    "Motorcycle Driving License": {
      "th": "ใบขับขี่รถจักยานยนต์",
      "en": "Motorcycle Driving License"
    },
    "Own a Motorcycle": {
      "th": "มีรถจักรยานยนต์",
      "en": "Own a Motorcycle"
    },
    "Contact Information": {
      "th": "ข้อมูลติดต่อ",
      "en": "Contact Information"
    },
    "Emergency Contact": {
      "th": "บุคคลติดต่อฉุกเฉิน",
      "en": "Emergency Contact"
    },
    "First Name": {
      "th": "ชื่อ",
      "en": "First Name"
    },
    "Last Name": {
      "th": "นามสกุล",
      "en": "Last Name"
    },
    "Relationship": {
      "th": "ความสัมพันธ์",
      "en": "Relationship"
    },
    "Phone Number": {
      "th": "เบอร์โทรศัพท์",
      "en": "Phone Number"
    },
    "House Registration Address": {
      "th": "ที่อยู่ตามทะเบียนบ้าน",
      "en": "House Registration Address"
    },
    "Country": {
      "th": "ประเทศ",
      "en": "Country"
    },
    "Postcode": {
      "th": "รหัสไปรษณีย์",
      "en": "Postcode"
    },
    "Province": {
      "th": "จังหวัด",
      "en": "Province"
    },
    "District": {
      "th": "อำเภอ/เขต",
      "en": "District"
    },
    "Subdistrict": {
      "th": "ตำบล/แขวง",
      "en": "Subdistrict"
    },
    "House No": {
      "th": "บ้านเลขที่",
      "en": "House No."
    },
    "Building": {
      "th": "อาคาร",
      "en": "Building"
    },
    "Alley": {
      "th": "ตรอก/ซอย",
      "en": "Alley"
    },
    "Road": {
      "th": "ถนน",
      "en": "Road"
    },
    "Current Address": {
      "th": "ที่อยู่ปัจจุบัน",
      "en": "Current Address"
    },
    "Same as House Registration Address": {
      "th": "ข้อมูลเหมือนที่อยู่ตามทะเบียนบ้าน",
      "en": "Same as House Registration Address"
    },
    "Language": {
      "th": "ภาษา",
      "en": "Language"
    },
    "Add Language": {
      "th": "เพิ่มภาษา",
      "en": "Add Language"
    },
    "Language Proficiency Test": {
      "th": "การทดสอบความสามารถทางภาษา",
      "en": "Language Proficiency Test"
    },
    "Score": {
      "th": "คะแนน",
      "en": "Score"
    },
    "Listening": {
      "th": "ฟัง",
      "en": "Listening"
    },
    "Reading": {
      "th": "อ่าน",
      "en": "Reading"
    },
    "Writing": {
      "th": "เขียน",
      "en": "Writing"
    },
    "Speaking": {
      "th": "พูด",
      "en": "Speaking"
    },
    "Health": {
      "th": "สุขภาพ",
      "en": "Health"
    },
    "Blood Type": {
      "th": "กรุ๊ปเลือด",
      "en": "Blood Type"
    },
    "Medical Conditions": {
      "th": "โรคประจำตัว",
      "en": "Medical Conditions"
    },
    "Life Insurance Number": {
      "th": "เลขที่ประกันชีวิต",
      "en": "Life Insurance Number"
    },
    "Family Information": {
      "th": "ข้อมูลครอบครัว",
      "en": "Family Information"
    },
    "Add Family Information": {
      "th": "เพิ่มข้อมูลครอบครัว",
      "en": "Add Family Information"
    },
    "Spouse": {
      "th": "คู่สมรส",
      "en": "Spouse"
    },
    "Title": {
      "th": "คำนำหน้า",
      "en": "Title"
    },
    "Occupation": {
      "th": "อาชีพ",
      "en": "Occupation"
    },
    "Work Address": {
      "th": "ที่อยู่ที่ทำงาน",
      "en": "Work Address"
    },
    "No.": {
      "th": "บ้านเลขที่",
      "en": "No."
    },
    "Year of Marriage Registration": {
      "th": "ปีที่จดทะเบียนสมรส",
      "en": "Year of Marriage Registration"
    },
    "Province of Registration": {
      "th": "จังหวัดที่จดทะเบียน",
      "en": "Province of Registration"
    },
    "District of Registration": {
      "th": "เขตที่จดทะเบียน",
      "en": "District of Registration"
    },
    "Province of Certificate Display": {
      "th": "จังหวัดที่แสดงใบรับรอง",
      "en": "Province of Certificate Display"
    },
    "District of Certificate Display": {
      "th": "เขตที่แสดงใบรับรอง",
      "en": "District of Certificate Display"
    },
    "Number of childen": {
      "th": "จำนวนบุตร",
      "en": "Number of childen"
    },
    "Number of sun": {
      "th": "จำนวนบุตรชาย",
      "en": "Number of sun"
    },
    "Number of daughter": {
      "th": "จำนวนบุตรสาว",
      "en": "Number of daughter"
    },
    "Marriage Certificate": {
      "th": "ทะเบียนสมรส",
      "en": "Marriage Certificate"
    },
    "Upload": {
      "th": "อัปโหลด",
      "en": "Upload"
    },
    "Upload Other Document": {
      "th": "อัปโหลดเอกสารอื่นๆ",
      "en": "Upload Other Document"
    },
    "Deceased": {
      "th": "ถึงแก่กรรม",
      "en": "Deceased"
    },
    "Child": {
      "th": "บุตร",
      "en": "Child"
    },
    "ฺBirth Certificate": {
      "th": "สูติบัตร",
      "en": "ฺBirth Certificate"
    },
    "Uplaod": {
      "th": "อัปโหลด",
      "en": "Uplaod"
    },
    "Parent": {
      "th": "บิดา/มารดา",
      "en": "Parent"
    },
    "Father": {
      "th": "บิดา",
      "en": "Father"
    },
    "Mother": {
      "th": "มารดา",
      "en": "Mother"
    },
    "Address": {
      "th": "ที่อยู่",
      "en": "Address"
    },
    "Date of Death (as per legal recoards)": {
      "th": "วันที่เสียชีวิต (ตามเอกสารทางกฎหมาย)",
      "en": "Date of Death (as per legal recoards)"
    },
    "Sibling": {
      "th": "พี่น้อง",
      "en": "Sibling"
    },
    "Brother": {
      "th": "พี่ชาย/น้องชาย",
      "en": "Brother"
    },
    "Sister": {
      "th": "พี่สาว/น้องสาว",
      "en": "Sister"
    },
    "Education Information": {
      "th": "ข้อมูลการศึกษา",
      "en": "Education Information"
    },
    "Add Education": {
      "th": "เพิ่มข้อมูลการศึกษา",
      "en": "Add Education"
    },
    "Degree": {
      "th": "ระดับการศึกษา",
      "en": "Degree"
    },
    "Field of Study": {
      "th": "สาขาวิชา",
      "en": "Field of Study"
    },
    "Insitution": {
      "th": "สถานศึกษา",
      "en": "Insitution"
    },
    "Start Year": {
      "th": "ปีที่เข้า",
      "en": "Start Year"
    },
    "End Year": {
      "th": "ปีที่จบ",
      "en": "End Year"
    },
    "GPA": {
      "th": "เกรดเฉลี่ย",
      "en": "GPA"
    },
    "Certificate": {
      "th": "ใบรับรอง",
      "en": "Certificate"
    },
    "Transcript": {
      "th": "วุฒิการศึกษา",
      "en": "Transcript"
    },
    "Add Work Experience": {
      "th": "เพิ่มประวัติการทำงาน",
      "en": "Add Work Experience"
    },
    "Position": {
      "th": "ตำแหน่ง",
      "en": "Position"
    },
    "Company": {
      "th": "บริษัท",
      "en": "Company"
    },
    "End Date": {
      "th": "วันที่สิ้นสุด",
      "en": "End Date"
    },
    "Reason for Leaving": {
      "th": "สาเหตุการลาออก",
      "en": "Reason for Leaving"
    },
    "Duration": {
      "th": "ระยะเวลา",
      "en": "Duration"
    },
    "Start Salary": {
      "th": "เงินเดือนเริ่มต้น",
      "en": "Start Salary"
    },
    "End Salary": {
      "th": "เงินเดือนสุดท้าย",
      "en": "End Salary"
    },
    "Scope of work": {
      "th": "ขอบเขตงาน",
      "en": "Scope of work"
    },
    "Personal Documents": {
      "th": "เอกสารส่วนบุคคล",
      "en": "Personal Documents"
    },
    "National ID": {
      "th": "บัตรประชาชน",
      "en": "National ID"
    },
    "Work Certificate (with or without salary)": {
      "th": "หนังสือรับรองการทำงาน",
      "en": "Work Certificate (with or without salary)"
    },
    "Bank account": {
      "th": "บัญชีธนาคาร",
      "en": "Bank account"
    },
    "family Document": {
      "th": "เอกสารครอบครัว",
      "en": "family Document"
    },
    "Dependent Birth Certificate": {
      "th": "สูติบัตรบุตร",
      "en": "Dependent Birth Certificate"
    },
    "Other Document": {
      "th": "เอกสารอื่นๆ",
      "en": "Other Document"
    },
    "File_Name": {
      "th": "ชื่อไฟล์",
      "en": "File_Name"
    },
    "Company Policy": {
      "th": "นโยบายบริษัท",
      "en": "Company Policy"
    },
    "Code of conduct": {
      "th": "ระเบียบปฏิบัติของบริษัท",
      "en": "Code of conduct"
    },
    "Accepted on": {
      "th": "วันที่ได้รับการยอมรับ",
      "en": "Accepted on"
    },
    "IT Security Policy": {
      "th": "นโยบายความปลอดภัยด้านไอที",
      "en": "IT Security Policy"
    },
    "PDPA Consent": {
      "th": "ข้อตกลงการให้ความยินยอม PDPA",
      "en": "PDPA Consent"
    },
    "PaySlips": {
      "th": "สลิปเงินเดือน",
      "en": "PaySlips"
    },
    "50Tawi": {
      "th": "50 ทวิ",
      "en": "50Tawi"
    },
    "Tax/SSO/Provident Fund": {
      "th": "ภาษี/ประกันสังคม/กองทุนสำรองเลี้ยงชีพ",
      "en": "Tax/SSO/Provident Fund"
    },
    "Calculation Method/Tax Deduction": {
      "th": "วิธีคำนวณ/ค่าลดหย่อน",
      "en": "Calculation Method/Tax Deduction"
    },
    "Total Salary": {
      "th": "เงินเดือนรวม",
      "en": "Total Salary"
    },
    "Tax": {
      "th": "ภาษี",
      "en": "Tax"
    },
    "Calculate Tax": {
      "th": "คิดภาษี",
      "en": "Calculate Tax"
    },
    "Branch no": {
      "th": "สาขาประกันสังคม",
      "en": "Branch no."
    },
    "Branch": {
      "th": "สาขา",
      "en": "Branch"
    },
    "Tax Code": {
      "th": "รหัสสาขาภาษี",
      "en": "Tax Code"
    },
    "Branch (Thai)": {
      "th": "ชื่อสาขาภาษี(ไทย)",
      "en": "Branch (Thai)"
    },
    "Branch (ENG)": {
      "th": "ชื่อสาขาภาษี(อังกฤษ)",
      "en": "Branch (ENG)"
    },
    "Distrcit": {
      "th": "อำเภอ/เขต",
      "en": "Distrcit"
    },
    "Subdistrcit": {
      "th": "ตำบล/แขวง",
      "en": "Subdistrcit"
    },
    "Issuing P.N.D.3": {
      "th": "ภงด.3",
      "en": "Issuing P.N.D.3"
    },
    "Tax calculation": {
      "th": "การคำนวณภาษี",
      "en": "Tax calculation"
    },
    "Average": {
      "th": "เฉลี่ย",
      "en": "Average"
    },
    "Cumulative": {
      "th": "สะสม",
      "en": "Cumulative"
    },
    "Percent": {
      "th": "ร้อยละ",
      "en": "Percent"
    },
    "Constand": {
      "th": "คงที่",
      "en": "Constand"
    },
    "Withholding": {
      "th": "หัก ณ ที่จ่าย",
      "en": "Withholding"
    },
    "P.N.D. 95 (ROH)": {
      "th": "ภงด.95 (ROH)",
      "en": "P.N.D. 95 (ROH)"
    },
    "Fixed Rate Withholding Tax": {
      "th": "การจ่ายภาษีแบบคงที่",
      "en": "Fixed Rate Withholding Tax"
    },
    "Baht": {
      "th": "บาท",
      "en": "Baht"
    },
    "Percentage - Base Tax": {
      "th": "ภาษีร้อยละ",
      "en": "Percentage - Base Tax"
    },
    "Employee - Paid Tax": {
      "th": "พนักงานจ่ายภาษี",
      "en": "Employee - Paid Tax"
    },
    "Company - Paid Tax": {
      "th": "บริษัทจ่ายภาษี",
      "en": "Company - Paid Tax"
    },
    "Company - Paid Setting": {
      "th": "ตั้งค่าบ.จ่าย",
      "en": "Company - Paid Setting"
    },
    "Company - Paid List": {
      "th": "รายการบริษัทจ่ายภาษีให้",
      "en": "Company - Paid List"
    },
    "Employee - Paid Tax List": {
      "th": "รายการพนักงานจ่ายภาษีเอง",
      "en": "Employee - Paid Tax List"
    },
    "Social security": {
      "th": "ประกันสังคม",
      "en": "Social security"
    },
    "Calculate SSO": {
      "th": "คิดประกันสังคม",
      "en": "Calculate SSO"
    },
    "Calculate KOR TOR 20": {
      "th": "คิด กท.20",
      "en": "Calculate KOR TOR 20"
    },
    "Social security Branch": {
      "th": "สาขาส่งประกันสังคม",
      "en": "Social security Branch"
    },
    "Branch Code": {
      "th": "รหัสสาขาประกันสังคม",
      "en": "Branch Code"
    },
    "Branch(Thai)": {
      "th": "ชื่อสาขา(ไทย)",
      "en": "Branch(Thai)"
    },
    "Branch(ENG)": {
      "th": "ชื่อสาขา(อังกฤษ)",
      "en": "Branch(ENG)"
    },
    "Branch name": {
      "th": "ชื่อสาขา",
      "en": "Branch name"
    },
    "Provident Fund": {
      "th": "กองทุนสำรองเลี้ยงชีพ",
      "en": "Provident Fund"
    },
    "Calculate Provident Fund": {
      "th": "คิดกองทุน",
      "en": "Calculate Provident Fund"
    },
    "Type of Funds": {
      "th": "ประเภทกองทุน",
      "en": "Type of Funds"
    },
    "Add": {
      "th": "เพิ่ม",
      "en": "Add"
    },
    "Code": {
      "th": "รหัส",
      "en": "Code"
    },
    "Thai Name": {
      "th": "ชื่อไทย",
      "en": "Thai Name"
    },
    "English Name": {
      "th": "ชื่ออังกฤษ",
      "en": "English Name"
    },
    "Date of Fund Enrollment": {
      "th": "วันที่เข้ากองทุน",
      "en": "Date of Fund Enrollment"
    },
    "Date of Fund Withdrawal": {
      "th": "ออกกองทุน",
      "en": "Date of Fund Withdrawal"
    },
    "Fund Inception Date": {
      "th": "วันที่เริ่มนับกองทุน",
      "en": "Fund Inception Date"
    },
    "Provident Fund Calculation For Employee": {
      "th": "วิธีคิดกองทุนพนักงาน",
      "en": "Provident Fund Calculation For Employee"
    },
    "Service Duration Calculation": {
      "th": "คำนวณจากอายุงาน",
      "en": "Service Duration Calculation"
    },
    "Individual Set up": {
      "th": "ตั้งค่าแต่ละคน",
      "en": "Individual Set up"
    },
    "Provident Fund Calculation For Company": {
      "th": "วิธีคิดกองทุนบริษัท",
      "en": "Provident Fund Calculation For Company"
    },
    "Attendance Time Setting": {
      "th": "การตั้งค่าเวลา-การมาทำงาน",
      "en": "Attendance Time Setting"
    },
    "Total Working Hours": {
      "th": "จำนวนชั่วโมงทำงาน",
      "en": "Total Working Hours"
    },
    "Day/Month": {
      "th": "วัน/เดือน",
      "en": "Day/Month"
    },
    "Hour/Day": {
      "th": "ชั่วโมง/วัน",
      "en": "Hour/Day"
    },
    "Overtime Setting": {
      "th": "การตั้งค่าเวลา-ค่าล่วงเวลา",
      "en": "Overtime Setting"
    },
    "Personal Tax Deduction": {
      "th": "ค่าลดหย่อนภาษีบุคคล",
      "en": "Personal Tax Deduction"
    },
    "Personal Deduction": {
      "th": "ค่าลดหย่อนส่วนตัว",
      "en": "Personal Deduction"
    },
    "Shift Setting": {
      "th": "การตั้งค่ากะงาน",
      "en": "Shift Setting"
    },
    "Shift Group": {
      "th": "กลุ่มกะงาน",
      "en": "Shift Group"
    },
    "Shift Visibility Permission": {
      "th": "สิทธิ์การเข้าถึงตารางกะ",
      "en": "Shift Visibility Permission"
    },
    "Working Days - Select Day Off": {
      "th": "วันทำงาน - เลือกวันหยุด",
      "en": "Working Days - Select Day Off"
    },
    "Week": {
      "th": "สัปดาห์",
      "en": "Week"
    },
    "Auto": {
      "th": "อัตโนมัติ",
      "en": "Auto"
    },
    "Check Your Entitlement": {
      "th": "ตรวจสอบสิทธิของคุณ",
      "en": "Check Your Entitlement"
    },
    "Effective Year": {
      "th": "ปีที่ใช้สิทธิ",
      "en": "Effective Year"
    },
    "Limit / Year": {
      "th": "วงเงิน / ปี",
      "en": "Limit / Year"
    },
    "Limit / Day": {
      "th": "วงเงิน / วัน",
      "en": "Limit / Day"
    },
    "Limit / Month": {
      "th": "วงเงิน / เดือน",
      "en": "Limit / Month"
    },
    "Limit / Period": {
      "th": "วงเงิน / งวด",
      "en": "Limit / Period"
    },
    "Total Claimed": {
      "th": "ยอดที่ขอเบิกไปแล้ว",
      "en": "Total Claimed"
    },
    "Balance": {
      "th": "ยอดคงเหลือ",
      "en": "Balance"
    },
    "My Claim Requests": {
      "th": "คำขอเบิกของฉัน",
      "en": "My Claim Requests"
    },
    "Total {count} Requests": {
      "th": "รวม {count} คำขอ",
      "en": "Total {count} Requests"
    },
    "List": {
      "th": "รายการ",
      "en": "List"
    },
    "Requested Date": {
      "th": "วันที่ขอ",
      "en": "Requested Date"
    },
    "Employee ID and Full Name": {
      "th": "รหัสพนักงาน และ ชื่อพนักงาน",
      "en": "Employee ID and Full Name"
    },
    "Claim Type": {
      "th": "ประเภทคำขอเบิก",
      "en": "Claim Type"
    },
    "Select Claim Type": {
      "th": "เลือกประเภทคำขอเบิก",
      "en": "Select Claim Type"
    },
    "Select Welfare Type": {
      "th": "เลือกประเภทสวัสดิการ",
      "en": "Select Welfare Type"
    },
    "Year of Allowance": {
      "th": "ปีที่ใช้สิทธิ",
      "en": "Year of Allowance"
    },
    "Claim Amount": {
      "th": "จำนวนเงินที่ขอเบิก",
      "en": "Claim Amount"
    },
    "Max: 10MB Formats": {
      "th": "ขนาดไฟล์สูงสุด: 10MB\nรองรับรูปแบบไฟล์: .bmp, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, .png, .txt",
      "en": "Max: 10MB\nFormats: .bmp, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, .png, .txt"
    },
    "Message": {
      "th": "ข้อความ",
      "en": "Message"
    },
    "Submit": {
      "th": "ยืนยัน",
      "en": "Submit"
    },
    "Select Expense Type": {
      "th": "เลือกประเภทค่าใช้จ่าย",
      "en": "Select Expense Type"
    },
    "Limit / Claim": {
      "th": "วงเงิน / ครั้งที่ขอเบิก",
      "en": "Limit / Claim"
    },
    "Balance / Claim": {
      "th": "ยอดคงเหลือ / ครั้งที่ขอเบิก",
      "en": "Balance / Claim"
    },
    "Note": {
      "th": "หมายเหตุ",
      "en": "Note"
    },
    "Your advance payroll request is set as a one-time claim": {
      "th": "คำขอเบิกเงินเดือนล่วงหน้าของคุณถูกตั้งค่าให้เป็นการเบิกครั้งเดียว",
      "en": "Your advance payroll request is set as a one-time claim."
    },
    "Your advance payroll request is set as a one-time claim and by payroll period": {
      "th": "คำขอเบิกเงินเดือนล่วงหน้าของคุณถูกตั้งค่าให้เป็นการเบิกครั้งเดียวและตามรอบการจ่ายเงินเดือน",
      "en": "Your advance payroll request is set as a one-time claim and by payroll period."
    },
    "Your advance payroll request is set as a one-time claim and by working day": {
      "th": "คำขอเบิกเงินเดือนล่วงหน้าของคุณถูกตั้งค่าให้เป็นการเบิกครั้งเดียวและตามวันทำงาน",
      "en": "Your advance payroll request is set as a one-time claim and by working day."
    },
    "Your advance payroll request is set by working day and payroll period": {
      "th": "คำขอเบิกเงินเดือนล่วงหน้าของคุณถูกตั้งค่าให้เป็นไปตามวันทำงานและรอบการจ่ายเงินเดือน",
      "en": "Your advance payroll request is set by working day and payroll period."
    },
    "Team Overview": {
      "th": "ภาพรวมทีม",
      "en": "Team Overview"
    },
    "Employee View": {
      "th": "มุมมองพนักงาน",
      "en": "Employee View"
    },
    "Workload View": {
      "th": "มุมมองภาระงาน",
      "en": "Workload View"
    },
    "Shift Assignment (Employee)": {
      "th": "การมอบหมายกะ (พนักงาน)",
      "en": "Shift Assignment (Employee)"
    },
    "Period": {
      "th": "ช่วงวันที่",
      "en": "Period"
    },
    "Shift group": {
      "th": "กลุ่มกะงาน",
      "en": "Shift group"
    },
    "Shift": {
      "th": "กะงาน",
      "en": "Shift"
    },
    "Custom Shift": {
      "th": "กำหนดกะงาน",
      "en": "Custom Shift"
    },
    "Employee Name": {
      "th": "ชื่อพนักงาน",
      "en": "Employee Name"
    },
    "Day off": {
      "th": "วันหยุด",
      "en": "Day off"
    },
    "Unable to assign a full-time shift to a part-time employee": {
      "th": "ไม่สามารถมอบหมายกะงานเต็มเวลาให้กับพนักงานพาร์ทไทม์ได้",
      "en": "Unable to assign a full-time shift to a part-time employee."
    },
    "You have selected overlapping shifts": {
      "th": "ไม่สามารถเลือกกะงานที่ซ้อนทับกันได้",
      "en": "You have selected overlapping shifts."
    },
    "Day Off": {
      "th": "วันหยุด",
      "en": "Day Off"
    },
    "Working Hours": {
      "th": "ชั่วโมงทำงาน",
      "en": "Working Hours"
    },
    "Total Assigned Shifts (Unit)": {
      "th": "จำนวนกะที่มอบหมาย (หน่วย)",
      "en": "Total Assigned Shifts (Unit)"
    },
    "Total Leave (Unit)": {
      "th": "จำนวนการลา (หน่วย)",
      "en": "Total Leave (Unit)"
    },
    "Total Day Off (Unit)": {
      "th": "จำนวนวันหยุด (หน่วย)",
      "en": "Total Day Off (Unit)"
    },
    "Absent": {
      "th": "ขาดงาน",
      "en": "Absent"
    },
    "Missing Clock-in": {
      "th": "ไม่มีเวลาเข้างาน",
      "en": "Missing Clock-in"
    },
    "Missing Clock-out": {
      "th": "ไม่มีเวลาออกงาน",
      "en": "Missing Clock-out"
    },
    "On Leave": {
      "th": "ลางาน",
      "en": "On Leave"
    },
    "Month": {
      "th": "เดือน",
      "en": "Month"
    },
    "Actual Time": {
      "th": "เวลาจริง",
      "en": "Actual Time"
    },
    "Leave Request": {
      "th": "คำขอลา",
      "en": "Leave Request"
    },
    "Shift Exchange": {
      "th": "เปลี่ยนกะงาน",
      "en": "Shift Exchange"
    },
    "Request Type": {
      "th": "ประเภทคำขอ",
      "en": "Request Type"
    },
    "Shift Swap": {
      "th": "สลับกะงาน",
      "en": "Shift Swap"
    },
    "Holiday in lieu": {
      "th": "บันทึกการแจ้งวันหยุดชดเชย",
      "en": "Holiday in lieu"
    },
    
    "Leave Entitlement": {
      "th": "สิทธิ์การลา",
      "en": "Leave Entitlement"
    },
    "days": {
      "th": "วัน",
      "en": "days"
    },
    "Leave Taken": {
      "th": "การลาที่ใช้ไป",
      "en": "Leave Taken"
    },
    "hours": {
      "th": "ชั่วโมง",
      "en": "hours"
    },
    "Day": {
      "th": "วัน",
      "en": "Day"
    },
    "To": {
      "th": "ถึง",
      "en": "To"
    },
    "Select Date": {
      "th": "เลือกวันที่",
      "en": "Select Date"
    },
    "Max: 10MB": {
      "th": "ขนาดสูงสุด: 10MB",
      "en": "Max: 10MB"
    },
    "Formats:": {
      "th": "รูปแบบ: .bmp, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, .png, .txt",
      "en": "Formats: .bmp, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, .png, .txt"
    },
    "Shift 1": {
      "th": "กะที่ 1",
      "en": "Shift 1"
    },
    "Shift 2": {
      "th": "กะที่ 2",
      "en": "Shift 2"
    },
    "Note: No Deduction": {
      "th": "หมายเหตุ: ไม่มีการหักเงิน",
      "en": "Note: No Deduction"
    },
    "Accumulate": {
      "th": "สะสม",
      "en": "Accumulate"
    },
    "Current": {
      "th": "ปัจจุบัน",
      "en": "Current"
    },
    "[daysUsed] d [hoursUsed] h of [totalDays] d": {
      "th": "[daysUsed] วัน [hoursUsed] ชั่วโมง จาก [totalDays] วัน",
      "en": "[daysUsed] d [hoursUsed] h of [totalDays] d"
    },
    "Hour": {
      "th": "ชั่วโมง",
      "en": "Hour"
    },
    "Overtime Type": {
      "th": "ประเภทการทำงานล่วงเวลา",
      "en": "Overtime Type"
    },
    "Select Overtime Type": {
      "th": "เลือกประเภทการทำงานล่วงเวลา",
      "en": "Select Overtime Type"
    },
    "Select Payroll Type": {
      "th": "เลือกประเภทการจ่ายเงิน",
      "en": "Select Payroll Type"
    },
    "Work Type": {
      "th": "ประเภทงาน",
      "en": "Work Type"
    },
    "Select Work Type": {
      "th": "เลือกประเภทงาน",
      "en": "Select Work Type"
    },
    "From": {
      "th": "จาก",
      "en": "From"
    },
    "Overtime Special": {
      "th": "การทำงานล่วงเวลา (พิเศษ)",
      "en": "Overtime Special"
    },
    "OT1": {
      "th": "โอที1",
      "en": "OT1"
    },
    "OT2": {
      "th": "โอที2",
      "en": "OT2"
    },
    "OT3": {
      "th": "โอที3",
      "en": "OT3"
    },
    "OT4": {
      "th": "โอที4",
      "en": "OT4"
    },
    "OT5": {
      "th": "โอที5",
      "en": "OT5"
    },
    "OT6": {
      "th": "โอที6",
      "en": "OT6"
    },
    "OT Allowance": {
      "th": "ค่ากะโอที",
      "en": "OT Allowance"
    },
    "Food Allowance": {
      "th": "ค่าอาหารโอที",
      "en": "Food Allowance"
    },
    "Special Allowance": {
      "th": "เงินพิเศษ",
      "en": "Special Allowance"
    },
    "Clock in": {
      "th": "เวลาเข้างาน",
      "en": "Clock in"
    },
    "Clock out": {
      "th": "เวลาออกงาน",
      "en": "Clock out"
    },
    "Select Status": {
      "th": "เลือกสถานะ",
      "en": "Select Status"
    },
    "Swap with": {
      "th": "สลับกับ",
      "en": "Swap with"
    },
    "Swap to": {
      "th": "สลับไปยัง",
      "en": "Swap to"
    },
    "Shift not assigned yet": {
      "th": "ไม่พบกะงาน",
      "en": "Shift not assigned yet"
    },
    "Holiday Request": {
      "th": "วันที่ขอหยุดชดเชย",
      "en": "Holiday Request"
    },
    "Assigned Shift on Public Holiday": {
      "th": "กะงานที่ได้รับมอบหมายในวันหยุดประจำปี",
      "en": "Assigned Shift on Public Holiday"
    },
    "Public Holiday": {
      "th": "วันหยุดรประจำปี",
      "en": "Public Holiday"
    },
    "Annual holidays: If a compensatory leave request has already been made, duplicate requests are not allowed": {
      "th": "วันหยุดประจำปี: หากมีการขอลาหยุดทดแทนแล้ว จะไม่สามารถขอลาได้ซ้ำ",
      "en": "Annual holidays: If a compensatory leave request has already been made, duplicate requests are not allowed."
    },
    "Must be used within 60 days from the date of the original holiday": {
      "th": "ต้องใช้ภายใน 60 วันนับจากวันที่วันหยุดที่เกิดขึ้นแล้ว",
      "en": "Must be used within 60 days from the date of the original holiday."
    },
    "Incomplete Form Submission": {
      "th": "การส่งข้อมูลไม่สมบูรณ์",
      "en": "Incomplete Form Submission"
    },
    "Please fill in the required field before submitting": {
      "th": "กรุณากรอกข้อมูลที่จำเป็นก่อนที่จะส่งข้อมูล",
      "en": "Please fill in the required field before submitting."
    },
    "Leave exceeds the limit": {
      "th": "จำนวนวันลามากกว่าที่กำหนด",
      "en": "Leave exceeds the limit."
    },
    "Please contact Human Resource": {
      "th": "กรุณาติดต่อฝ่ายทรัพยากรบุคคล",
      "en": "Please contact Human Resource."
    },
    "Not eligible for vacation leave yet": {
      "th": "ยังไม่มีสิทธิ์ลาพักร้อน",
      "en": "Not eligible for vacation leave yet."
    },
    "OK": {
      "th": "ตกลง",
      "en": "OK"
    },
    "Vacation leave is not allowed between": {
      "th": "ไม่สามารถลาพักร้อนระหว่างวันที่",
      "en": "Vacation leave is not allowed between"
    },
    "Unable to save": {
      "th": "ไม่สามารถบันทึกข้อมูลได้",
      "en": "Unable to save"
    },
    "The start date must be earlier than or equal to the end date": {
      "th": "วันที่เริ่มต้นต้องไม่มากกว่าวันที่สิ้นสุด",
      "en": "The start date must be earlier than or equal to the end date."
    },
    "Welcome back!": {
      "th": "ยินดีต้อนรับกลับ",
      "en": "Welcome back!"
    },
    "Sign in With Microsoft": {
      "th": "เข้าสู่ระบบด้วยบัญชี Microsoft",
      "en": "Sign in With Microsoft"
    },
    "OR": {
      "th": "หรือ",
      "en": "OR"
    },
    "User ID": {
      "th": "รหัสพนักงาน",
      "en": "User ID"
    },
    "Password": {
      "th": "รหัสผ่าน",
      "en": "Password"
    },
    "Remember me": {
      "th": "จดจำฉันไว้",
      "en": "Remember me"
    },
    "Forgot password?": {
      "th": "ลืมรหัสผ่าน?",
      "en": "Forgot password?"
    },
    "Continue": {
      "th": "ไปต่อ",
      "en": "Continue"
    },
    "Total Employee Experience & Management": {
      "th": "Total Employee Experience & Management",
      "en": "Total Employee Experience & Management"
    },
    "good_morning": {"th": "สวัสดียามเช้า", "en": "Good Morning"},
    "good_afternoon": {"th": "สวัสดียามบ่าย", "en": "Good Afternoon"},
    "good_evening": {"th": "สวัสดียามเย็น", "en": "Good Evening"},
    "home": {"th": "หน้าหลัก", "en": "Home"},
    "calendar": {"th": "ปฏิทิน", "en": "Calendar"},
    "request": {"th": "คำขอ", "en": "Request"},
    "notification": {"th": "การแจ้งเตือน", "en": "Notification"},
    "setting": {"th": "ตั้งค่า", "en": "Setting"},
    "more": {"th": "เพิ่มเติม", "en": "More"},
    "activity_today": {
      "th": "มาดูกิจกรรมของคุณวันนี้กันเถอะ",
      "en": "Let’s take a look at your activity today."
    },
    "quick_menu": {"th": "เมนูลัด", "en": "Quick Menu"},
    "menu": {"th": "เมนู", "en": "Menu"},
    "my_day": {"th": "วันของฉัน", "en": "My Day"},
    "today": {"th": "วันนี้", "en": "Today"},
    "yesterday": {"th": "เมื่อวาน", "en": "Yesterday"},
    "tomorrow": {"th": "พรุ่งนี้", "en": "Tomorrow"},
    "my_tasks": {"th": "งานของฉัน", "en": "My Tasks"},
    "detail": {"th": "รายละเอียด", "en": "Detail"},
    "due_date": {"th": "วันครบกำหนด", "en": "Due Date"},
    "high": {"th": "สูง", "en": "High"},
    "medium": {"th": "ปานกลาง", "en": "Medium"},
    "low": {"th": "ต่ำ", "en": "Low"},
    "new_todo_item": {"th": "เพิ่มสิ่งที่ต้องทำ", "en": "New To Do List"},
    "todo_list": {"th": "รายการที่ต้องทำ", "en": "To Do List"},
    "sort_by": {"th": "เรียงตาม", "en": "Sort by"},
    "priority": {"th": "ลำดับความสำคัญ", "en": "Priority"},
    "link_to_okr": {
      "th": "คุณต้องการเชื่อมโยงกับ OKR ของคุณหรือไม่?",
      "en": "Do you want to link to your OKR?"
    },
    "objective": {"th": "วัตถุประสงค์", "en": "Objective"},
    "okr": {"th": "OKR", "en": "OKR"},
    "all_completed_items": {
      "th": "รายการที่เสร็จสมบูรณ์ทั้งหมด",
      "en": "All Completed Items"
    },
    "completed_items": {
      "th": "รายการที่เสร็จสมบูรณ์",
      "en": "Completed Items"
    },
    "add_items": {"th": "เพิ่มรายการ", "en": "Add items"},
    "title": {"th": "หัวข้อ", "en": "Title"},
    "add_your_title": {"th": "เพิ่มหัวข้อของคุณ", "en": "Add your title"},
    "description": {"th": "คำอธิบาย", "en": "Description"},
    "add_your_description": {
      "th": "เพิ่มคำอธิบายของคุณ",
      "en": "Add your description"
    },
    "delete": {"th": "ลบ", "en": "Delete"},
    "leave_balance": {"th": "ยอดคงเหลือวันลา", "en": "Leave Balance"},
    "d": {"th": "วัน", "en": "d"},
    "h": {"th": "ชม.", "en": "h"},
    "m": {"th": "น.", "en": "m"},
    "my_team_overview": {"th": "ภาพรวมทีมของฉัน", "en": "My Team Overview"},
    "present": {"th": "ปัจจุบัน", "en": "Present"},
    "no_clock_info": {"th": "ไม่มีข้อมูลนาฬิกา", "en": "No Clock Info"},
    "view_all": {"th": "ดูทั้งหมด", "en": "View All"},
    "manage_widget": {"th": "จัดการวิดเจ็ต", "en": "Manage Widget"},
    "in": {"th": "เข้า", "en": "In"},
    "out": {"th": "ออก", "en": "Out"},
    "done": {"th": "เสร็จสิ้น", "en": "Done"},
    "save": {"th": "บันทึก", "en": "Save"},
    "cancel": {"th": "ยกเลิก", "en": "Cancel"},
    "of": {"th": "ของ", "en": "of"},
    "there_must_be_at_least_1_menu": {
      "th": "ต้องมีอย่างน้อย 1 เมนู",
      "en": "There must be at least 1 menu."
    },
    "you_can_add_up_to_8_menu": {
      "th": "สามารถเพิ่มเมนูได้สูงสุด 8 เมนู",
      "en": "You can add up to 8 menu."
    },
    "Inbox": {
      "th": "กล่องจดหมาย",
      "en": "Inbox"
    }, 
    "Events": {
      "th": "กิจกรรม",
      "en": "Events"
    },
    "Log In": {
      "th": "เข้าสู่ระบบ",
      "en": "Log In"
    },
    "Log Out": {
      "th": "ออกจากระบบ",
      "en": "Log Out"
    },
    "Scan QR Code": {
      "th": "สแกนคิวอาร์โค้ด",
      "en": "Scan QR Code"
    },
    "Update language": {
      "th": "อัพเดทภาษา",
      "en": "Update language"
    },
    "Keep Log In": {
      "th": "บันทึกการเข้าสู่ระบบ",
      "en": "Keep Log In"
    },
    "Stay signed in for next time": {
      "th": "เข้าสู่ระบบครั้งต่อไปโดยไม่ต้องกรอกรหัส",
      "en": "Stay signed in for next time."
    },
    "Screen Shot": {
      "th": "บันทึกภาพหน้าจอ",
      "en": "Screen Shot"
    },
    "Enable screen capture": {
      "th": "เปิดใช้งานการจับภาพหน้าจอ",
      "en": "Enable screen capture"
    },
    "Change Password": {
      "th": "เปลี่ยนรหัสผ่าน",
      "en": "Change Password"
    },
    "Add Link": {
      "th": "เพิ่มลิงค์",
      "en": "Add Link"
    },
    "About": {
      "th": "เกี่ยวกับแอป",
      "en": "About"
    },
    "Thai": {
      "th": "ไทย",
      "en": "Thai"
    },
    "English": {
      "th": "อังกฤษ",
      "en": "English"
    },
    "Burmese": {
      "th": "พม่า",
      "en": "Burmese"
    }

   

  }
]
// !!!!!!!!

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

const myrequests = {
  TimeRequest: [
    {
      TransactionID: 4,
      TransactionForm: "LeaveForm",
      ListName: "ลาป่วย",
      ListDetail: "1 วัน",
      PersonID: 42,
      Approve: "R",
      RequestDate: "2024-11-21T00:00:00",
      EffectiveDate: "2024-11-28T00:00:00",
      User_Approve: "cs 21/11/67 15:00",
      User_Approve2: null,
      User_Approve3: null,
      User_Approve4: null,
      User_Approve5: null,
      User_Approve6: null,
      HR_Approve: "cs,cs,A,21/11/2024 15:00",
    },
    {
      TransactionID: 5,
      TransactionForm: "LeaveForm",
      ListName: "ลาป่วย",
      ListDetail: "1 วัน",
      PersonID: 42,
      Approve: "A",
      RequestDate: "2024-11-21T15:16:11.007",
      EffectiveDate: "2024-11-25T00:00:00",
      User_Approve: "",
      User_Approve2: null,
      User_Approve3: null,
      User_Approve4: null,
      User_Approve5: null,
      User_Approve6: null,
      HR_Approve: ",22/พ.ย./67 16:50,A,",
    },
  ],
  ClaimRequest: [
    {
      TransactionID: 4,
      TransactionForm: "ClaimRequest",
      ListName: "ClaimRequest",
      ListDetail: "1 วัน",
      PersonID: 42,
      Approve: "A",
      RequestDate: "2024-11-21T00:00:00",
      EffectiveDate: "2024-11-28T00:00:00",
      User_Approve: "cs 21/11/67 15:00",
      User_Approve2: null,
      User_Approve3: null,
      User_Approve4: null,
      User_Approve5: null,
      User_Approve6: null,
      HR_Approve: "cs,cs,A,21/11/2024 15:00",
    },
    {
      TransactionID: 5,
      TransactionForm: "ClaimRequest",
      ListName: "ClaimRequest",
      ListDetail: "1 วัน",
      PersonID: 42,
      Approve: "P",
      RequestDate: "2024-11-21T15:16:11.007",
      EffectiveDate: "2024-11-25T00:00:00",
      User_Approve: "",
      User_Approve2: null,
      User_Approve3: null,
      User_Approve4: null,
      User_Approve5: null,
      User_Approve6: null,
      HR_Approve: ",22/พ.ย./67 16:50,A,",
    },
  ],
  Document: [
    {
      TransactionID: 4,
      TransactionForm: "Document",
      ListName: "Document",
      ListDetail: "1 วัน",
      PersonID: 42,
      Approve: "P",
      RequestDate: "2024-11-21T00:00:00",
      EffectiveDate: "2024-11-28T00:00:00",
      User_Approve: "cs 21/11/67 15:00",
      User_Approve2: null,
      User_Approve3: null,
      User_Approve4: null,
      User_Approve5: null,
      User_Approve6: null,
      HR_Approve: "cs,cs,A,21/11/2024 15:00",
    },
    {
      TransactionID: 5,
      TransactionForm: "Document",
      ListName: "Document",
      ListDetail: "1 วัน",
      PersonID: 42,
      Approve: "R",
      RequestDate: "2024-11-21T15:16:11.007",
      EffectiveDate: "2024-11-25T00:00:00",
      User_Approve: "",
      User_Approve2: null,
      User_Approve3: null,
      User_Approve4: null,
      User_Approve5: null,
      User_Approve6: null,
      HR_Approve: ",22/พ.ย./67 16:50,A,",
    },
  ],
};

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
  myrequests,
};
