from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.document import router as document_router
from app.auth.routes import auth_router
from app.db.db import Base, engine

print("✅ THIS IS THE REAL main.py being run")

app = FastAPI(debug=True)

# ✅ Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Create tables on startup
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.middleware("http")
async def debug_body(request, call_next):
    body = await request.body()
    print("📦 Raw body received:", body.decode())
    return await call_next(request)


# ✅ Include routers AFTER middleware
app.include_router(auth_router)
app.include_router(document_router)

print("🚀 Server starting...")









