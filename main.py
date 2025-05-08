from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.document import router as document_router
from app.auth.routes import auth_router

print("✅ THIS IS THE REAL main.py being run")

app = FastAPI(debug=True)

# ✅ Add CORS middleware


# ✅ Test CORS route


# ✅ Include routers AFTER middleware
app.include_router(auth_router)
app.include_router(document_router)

import asyncio
from app.db.db import Base, engine

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

asyncio.run(init_db())


print("🚀 Server starting...")









