from anthropic import Anthropic

client = Anthropic(api_key="your-api-key-here")

message = client.messages.create(
    model="claude-opus-4-20250514",
    max_tokens=1000,
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)
print(message.content)