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

print("🚀 Server starting...")









