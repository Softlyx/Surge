^https:\/\/capi\.lkcoffee\.com\/resource\/m\/sys\/app\/adposNew url reject
^https:\/\/(ec|c)api\.lkcoffee\.com\/resource\/m\/eorder\/product\/popAppTagProductList url reject
^https:\/\/m\.lkcoffee\.com\/ecapi\/resource\/m\/member\/exchange\/page url response-body \{.+\} response-body {"status":"SUCCESS"}
^https:\/\/m\.lkcoffee\.com\/capi\/resource\/m\/growUp\/main url response-body "popTitle":".+?" response-body "popTitle":""
^https?:\/\/img0[1-9]{1}\.luckincoffeecdn\.com\/group\d/M00/[A-Z0-9]{2}/[A-Z0-9]{2}/[a-zA-Z0-9]{29}\.(jpg|jpeg)_\.webp url reject-200
