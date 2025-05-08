export async function submitForm(form) {
  try {
    const response = await fetch("/api/generate-doc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // include cookies if used
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      throw new Error("Failed to generate document");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "visit_summary.docx";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Something went wrong generating the document.");
  }
}
