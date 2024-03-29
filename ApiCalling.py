from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Add your frontend URL here
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class SearchQuery(BaseModel):
    website_url: str

@app.post("/search/")
def search_website(query: SearchQuery):
    website_url = query.website_url
    # Perform scraping logic using Scrapy or any other method
    # Placeholder response for demonstration
    print("Website URL:", website_url)
    return {"website_url": website_url, "content": "Scraped content goes here"}
