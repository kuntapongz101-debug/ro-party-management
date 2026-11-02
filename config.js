// ตั้งค่าครั้งเดียวหลังสร้างโปรเจกต์ Firebase (ดูขั้นตอนใน README.md)
// ค่าในส่วน firebase ไม่ใช่ความลับ (ใส่ใน GitHub ได้) ความปลอดภัยจริงอยู่ที่ firestore.rules
//
// ถ้ายังไม่ได้ตั้งค่า (ปล่อย YOUR_API_KEY ไว้) โปรแกรมจะทำงานเป็น "โหมดเครื่องเดียว"
// ข้อมูลเก็บในเบราว์เซอร์ของเครื่องนั้นและไม่แชร์ให้คนอื่น เหมาะสำหรับลองก่อน

window.RO_CONFIG = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
  },

  // อีเมลผู้ดูแลที่แก้ไขข้อมูลได้ (ต้องตรงกับอีเมลใน firestore.rules ด้วย)
  adminEmails: ["admin@example.com"]
};
