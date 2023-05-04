[mitm] 

hostname = res.kfc.com.cn

[rewrite_local]

^https?:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/apphome6\/\w+\.json\? url reject-dict
