const BACKLOG_API_KEY = process.env.BACKLOG_API_KEY;
const BACKLOG_HOST = "https://teq-dev.backlog.com";
const ISSUE_KEY = process.argv[2]; // Lấy issue key từ tham số dòng lệnh

if (!ISSUE_KEY) {
  console.error(
    "⚠️ Vui lòng nhập issue key (VD: node update-backlog.js PROJ-123)"
  );
  process.exit(1);
}

const updateBacklogTask = async () => {
  try {
    const url = `${BACKLOG_HOST}/api/v2/issues/${ISSUE_KEY}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${BACKLOG_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusId: 3 }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`✅ Cập nhật ${ISSUE_KEY} thành công`);
  } catch (error) {
    console.error(`❌ Lỗi cập nhật ${ISSUE_KEY}:`, error);
  }
};

updateBacklogTask();
//abc
