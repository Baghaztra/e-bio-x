# Base image
FROM python:3.12-slim

# Set workdir
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy all source code ke dalam container
COPY . .

# Expose port flask (default flask 5000)
EXPOSE 5000

# Command waktu container run
CMD ["flask", "run", "--host=0.0.0.0"]
