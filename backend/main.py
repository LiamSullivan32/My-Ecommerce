from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import httpx
import asyncio
import json
from openai import OpenAI
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)    


@app.get("/products")
def get_products(minPrice: float = Query(None), maxPrice: float = Query(None), text: str = Query(None)):
    #df = pd.read_csv("./MOCK_DATA.csv")
    #json_result = df.to_json(orient='records', lines=True)
    data = [
    {
        "id": 1,
        "name": "Product One",
        "description": "This is a description for Product One.",
        "price": 19.99,
        "imageUrl": "https://i1.sndcdn.com/avatars-000508491087-32hktm-t240x240.jpg"
    },
    {
        "id": 2,
        "name": "Product Two",
        "description": "This is a description for Product Two.",
        "price": 29.99,
        "imageUrl": "https://i1.sndcdn.com/avatars-000508491087-32hktm-t240x240.jpg"
    },
    {
        "id": 3,
        "name": "Product Three",
        "description": "This is a description for Product Three.",
        "price": 39.99,
        "imageUrl": "https://i1.sndcdn.com/avatars-000508491087-32hktm-t240x240.jpg"
    },
    {
        "id": 4,
        "name": "Product Four",
        "description": "This is a description for Product Four.",
        "price": 49.99,
        "imageUrl": "https://i1.sndcdn.com/avatars-000508491087-32hktm-t240x240.jpg"
    }
]
    print(text)
    new_data = []
    for i in data:
        print(i)
        if i['price'] < minPrice or i['price'] > maxPrice:
            continue
        else:
            if text in i['name'] or not text:
                new_data.append(i)
    
    return new_data


    
    


if __name__ == "__main__":
    #asyncio.run(test_chatbox())
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
    print("hello")
    #est_chatbox()