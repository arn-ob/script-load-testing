# Homepage

```bash
curl 'https://stage-api.10minuteschool.net/page-builder-service/query' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'content-type: application/json' \
  -H 'origin: https://stage.10minuteschool.net' \
  -H 'referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  --data-raw '{"variables":{},"query":"{\n  getSections(position: \"hero\") {\n    name\n    id\n    title\n    section_title\n    background_color\n    background_image_url\n    clicked_url\n    status\n    position\n    status\n    end_at\n    OrderIdx\n    resources {\n      name\n      icon\n      type\n      style\n      description\n      order_idx\n      __typename\n    }\n    banners {\n      id\n      name\n      description\n      background_color\n      background_image_url\n      title\n      pages {\n        include\n        exclude\n        __typename\n      }\n      template\n      clicked_url\n      status\n      start_at\n      end_at\n      resources {\n        name\n        icon\n        url\n        order_idx\n        device\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}"}' \
  --compressed


curl 'https://stage-api.10minuteschool.net/skillup-service/api/v3/premium/content/courses' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/k12-course-service/api/v1/programs?type=admission' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed



curl 'https://stage-api.10minuteschool.net/k12-course-service/api/v1/programs?batch_id=201' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed
```


## https://stage.10minuteschool.net/academic/101/?group=science

```bash
curl 'https://stage-api.10minuteschool.net/k12-course-service/api/v2/courses?program_id=142&page=home' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/flow-service/api/v1/flows?vertical=k12&segment=101&modality=after_purchase&product=10091' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/k12-course-service/api/v2/routine?program_id=142&page=home' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/notice-service/api/v1/notices?identification_id=101&identification_type=segments&page=1&type=notice&limit=1' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/notice-service/api/v1/notices?identification_id=142&identification_type=program&page=1&type=notice&limit=2' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/catalog-service/api/v1/plans/renewal-message?minimal=true' \
  -H 'x-tenms-access-key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGFydF9hdCI6IjIwMjMtMDgtMDNUMDA6MDA6MDBaIiwiZW5kX2F0IjoiMjAyNC0wNy0xMVQyMzo1OTo1OS45OTlaIiwic3RhdHVzIjoib25nb2luZyIsInBsYW5faWQiOiIxNjciLCJwdXJjaGFzZV9za3VfaWQiOiIyNDk5NDciLCJwdXJjaGFzZV9wcm9kdWN0X2lkIjoiMTAwOTEiLCJzbHVnIjoib2IyMy1jbGFzcy0xMCIsImNvbnRlbnRfaWQiOjE0MiwiY29udGVudF90eXBlIjoicHJvZ3JhbSIsInBsYXRmb3JtIjoiazEyIn0._m3pxpffZreTkz8FGEfYOdc0JLj1P2LoFzhUehvNTRk' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/notice-service/api/v1/notices?identification_id=142&identification_type=program&page=1&type=notice&limit=2' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/notice-service/api/v1/notices?identification_id=101&identification_type=segments&page=1&type=notice&limit=1' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/k12-course-service/api/v2/programs/enrolled?segment_id=101' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed
```


## https://stage.10minuteschool.net/skills/courses/14/ghore-boshe-spoken-english

```bash
curl 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products/ghore-boshe-spoken-english/bundle-items' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed

curl 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products/ghore-boshe-spoken-english/free-products?lang=bn' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/skillup-service/api/v4/courses/ghore-boshe-spoken-english/syllabus' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products/ghore-boshe-spoken-english/variants' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/catalog-service/api/v2/recommendations?context_identification_id=40&context_identification_type=product&placement=product_page&page=1' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/cart-service/api/v1/carts?identifier=658ad45415e59054c0983e52' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'X-TENMS-SOURCE-PLATFORM: web' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed
```

## https://app-stage.10minuteschool.net/checkout

```bash
curl 'https://stage-api.10minuteschool.net/cart-service/api/v1/carts?identifier=658ad45415e59054c0983e52' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'X-TENMS-SOURCE-PLATFORM: web' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed

curl 'https://stage-api.10minuteschool.net/cart-service/api/v1/carts/658ad45415e59054c0983e52' \
  -X 'PATCH' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'content-type: application/json' \
  -H 'origin: https://stage.10minuteschool.net' \
  -H 'referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'x-tenms-source-platform: web' \
  --data-raw $'{"items":[{"catalog_sku_id":"249757","quantity":1,"promo":null,"catalog_product_id":"40","product":{"platform":"skills","name":"ঘরে বসে Spoken English --\u0021\u002118","month":"ঘরে বসে Spoken English (2)","id":40,"cat_id":21,"type":"single","slug":"ghore-boshe-spoken-english","meta":[],"image":"https://cdn.10minuteschool.com/images/thumbnails/ghore-boshe-spoken-english-online-course-updated-sqr-thumbnails.jpg","has_free_items":false,"author":"Instructor Shipu vai","catalog_product_id":"40","catalog_sku_id":"249757","content_id":14,"actual_price":16,"default_discount":11,"promo_code":null,"promo_discount":null,"vat":0,"final_price":5}}],"sales_attributions":{"referral":"r","referral_timestamp":"2024-01-30T05:58:41.349Z","organic":"https://stage-billing.10minuteschool.net/","organic_timestamp":"2023-12-19T10:46:55.662Z","attr_type":"search","attr_type_timestamp":"2024-01-30T05:58:41.349Z"},"meta":{"items":[{"platform":"skills","name":"ঘরে বসে Spoken English --\u0021\u002118","month":"ঘরে বসে Spoken English (2)","id":40,"cat_id":21,"type":"single","slug":"ghore-boshe-spoken-english","meta":[],"image":"https://cdn.10minuteschool.com/images/thumbnails/ghore-boshe-spoken-english-online-course-updated-sqr-thumbnails.jpg","has_free_items":false,"author":"Instructor Shipu vai","catalog_product_id":"40","catalog_sku_id":"249757","content_id":14,"actual_price":16,"default_discount":11,"promo_code":null,"promo_discount":null,"vat":0,"final_price":5}],"sub_total":16,"promo_code":null,"total_promo_discount":0,"total_default_discount":11,"order_total_price":5,"sales_attribution":{},"campaign_id":null,"utm_params":{},"total_vat":0}}' \
  --compressed


curl 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products/ghore-boshe-spoken-english/free-products?catalog_sku_id=249757' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'guest: TRUE' \
  -H 'origin: https://app-stage.10minuteschool.net' \
  -H 'referer: https://app-stage.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  --compressed


curl 'https://stage-api.10minuteschool.net/catalog-service/api/v1/bundles?sku_id=249757' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'guest: TRUE' \
  -H 'if-none-match: W/"78-lNNPDucyZIN5/T4/uBkpwU1WiQM"' \
  -H 'origin: https://app-stage.10minuteschool.net' \
  -H 'referer: https://app-stage.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  --compressed
```

## https://stage-billing.10minuteschool.net/v1/payment?invoice_id=TMS22456184

```bash
curl 'https://stage-api.10minuteschool.net/cart-service/api/v1/carts?identifier=658ad45415e59054c0983e52' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'guest: TRUE' \
  -H 'if-none-match: W/"a7d-mqzvu9yw7WQHe5Muy9M+4l9ecxc"' \
  -H 'origin: https://app-stage.10minuteschool.net' \
  -H 'referer: https://app-stage.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'x-tenms-source-platform: web' \
  --compressed



curl 'https://stage-api.10minuteschool.net/order-service/api/v1/orders' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'content-type: application/json' \
  -H 'guest: TRUE' \
  -H 'origin: https://app-stage.10minuteschool.net' \
  -H 'referer: https://app-stage.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  --data-raw '{"items":[{"platform":"skills","slug":"ghore-boshe-spoken-english","catalog_product_id":"40","content_id":14,"catalog_sku_id":"249757","actual_price":16,"default_discount":11,"promo_code":null,"promo_discount":null,"vat":0,"final_price":5}],"sub_total":16,"promo_code":null,"total_promo_discount":null,"total_default_discount":11,"order_total_price":5,"sales_attribution":{"meta_attribute":{"organic":{"referer":"https://stage-billing.10minuteschool.net/","timestamp":"2023-12-19T10:46:55.662Z"},"referral":{"value":"r","type":"search","timestamp":"2024-01-30T05:58:41.349Z"},"platform":"WEB"}},"campaign_id":null,"utm_params":{},"total_vat":0,"cart_id":"658ad45415e59054c0983e52","address":{"city":"Dhaka","zone":"Dhamrai , Savar","area":"Noyarhat Dhamai","details":"sadasd","receiver_name":"Arnob","receiver_number":"+8801991768446","city_id":1,"zone_id":1,"area_id":1}}' \
  --compressed



curl 'https://stage-api.10minuteschool.net/payment-service/api/v3/init' \
  -H 'authority: stage-api.10minuteschool.net' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,bn;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlcl9pbmZvIjp7Imludm9pY2VfaWQiOiJUTVMyMjQ1NjE4NCJ9LCJ1c2VyX2luZm8iOnsiaWQiOiI2M2FkNmIyOGFkMmEzMGE5MzhmMzMwYmIiLCJ1c2VyX2lkIjoiIiwiZW1haWwiOiIiLCJjb250YWN0IjoiKzg4MDE5OTE3Njg0NDYiLCJuYW1lIjoiQXJub2IifSwiaWF0IjoxNzA3Mjg4NzU3LCJleHAiOjE3MDcyOTA1NTd9.IN_GxKnTgdRx2c9i_bQtCdG_GBSLAnGbyuUUYA_I_-Y' \
  -H 'content-type: application/json' \
  -H 'origin: https://stage-billing.10minuteschool.net' \
  -H 'referer: https://stage-billing.10minuteschool.net/' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  --data-raw '{"success_url":"https://stage-billing.10minuteschool.net/v1/payment_success?invoice_id=TMS22456184","failed_url":"https://stage-billing.10minuteschool.net/v1/payment_failed","cancel_url":"https://stage-billing.10minuteschool.net/v1/payment?invoice_id=TMS22456184","invoice_id":"TMS22456184","payment_method":"bkash","agreement":{"new":0,"with":1},"source":"web","guest":false}' \
  --compressed
```


# https://stage.10minuteschool.net/skills/


curl 'https://stage-api.10minuteschool.net/skillup-service/api/v4/instructors?limit=8' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/skillup-service/api/v3/premium/content/courses/enrolled?limit=-1' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


# https://stage.10minuteschool.net/programs/134/ssc-23-smp-sci/


curl 'https://stage-api.10minuteschool.net/k12-course-service/api/v1/programs/134/segments?with_chapter=true' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products/ssc-23-smp-sci/free-products?lang=bn' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/discovery-service/api/v1/products/ssc-23-smp-sci/variants' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed


curl 'https://stage-api.10minuteschool.net/cart-service/api/v1/carts?identifier=658ad45415e59054c0983e52' \
  -H 'sec-ch-ua: "Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ2YjI4YWQyYTMwYTkzOGYzMzBiYiIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxOTkxNzY4NDQ2IiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJsb2dpbl9zb3VyY2UiOiIxMG1pbnNjaG9vbCIsImxvZ2luX3RhcmdldCI6IiIsImxvZ2luX2FzIjowLCJuYW1lIjoiQXJub2IiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwiZGV2aWNlX2lkIjoiNjViZjgzODc2NDUxMDVlNzlkYWE5MDg4IiwiZGV2aWNlIjp7ImRldmljZV9pZCI6IjY1YmY4Mzg3NjQ1MTA1ZTc5ZGFhOTA4OCIsImRldmljZV9uYW1lIjoiQ2hyb21lIDEyMS4wLjAuMCIsImRldmljZV90eXBlIjoiYnJvd3NlciIsImRldmljZV9vcyI6IkludGVsIE1hYyBPUyBYIDEwXzE1XzciLCJvcmlnaW4iOiJodHRwczovL2FwcC1zdGFnZS4xMG1pbnV0ZXNjaG9vbC5uZXQiLCJpcF9hZGRyZXNzIjoiMTc1LjQxLjQ1LjE5NSJ9LCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMi0yOVQxMDoyNTo0NC40NjZaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTcwNzc2OTg2M30.FSMBIhjL2ys1UMl1MEx13d-lMHRul31uAHrZHHBQQgk' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Referer: https://stage.10minuteschool.net/' \
  -H 'X-TENMS-SOURCE-PLATFORM: web' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed