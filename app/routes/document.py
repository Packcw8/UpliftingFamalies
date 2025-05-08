from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
from app.utils.doc_fill import fill_template
import uuid
import os

router = APIRouter()

OUTPUT_DIR = "app/generated_docs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

class VisitData(BaseModel):
    case_name: str
    case_number: str
    service_date: str
    service_provided: str
    codes: list[str]
    completion_status: str
    skill_deficit: str
    developed_skill: str
    participants: str
    start_time: str
    stop_time: str
    units: int
    summary: str
    clients_progress: str
    safety_checkbox: str
    abuse_checkbox: str
    location_checkbox: str
    miles: int
    at_units: int
    it_units: int
    signature: str
    route_1: dict
    route_2: dict = {}
    route_3: dict = {}

@router.post("/generate-doc")
def generate_doc(data: VisitData):
    try:
        doc = fill_template(data)
        filename = f"{uuid.uuid4()}.docx"
        output_path = os.path.join(OUTPUT_DIR, filename)
        doc.save(output_path)
        return FileResponse(output_path, filename="Visit_Report.docx", media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

