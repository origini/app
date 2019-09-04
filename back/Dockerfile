FROM tiangolo/uvicorn-gunicorn:python3.7

LABEL maintainer="Tomasz Sapletta <tom@sapletta.com>"

RUN pip install fastapi
RUN pip install uvicorn
RUN pip install pydantic

COPY ./app /app
