import asyncio
from app.db.db import engine
from app.db.base import Base

async def init():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

asyncio.run(init())


