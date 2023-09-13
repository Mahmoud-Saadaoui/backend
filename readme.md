# تعلم أساسيات node js
## إنشاء ملف المشروع
```
mkdir server
cd server
npm init -y
npm install express
```

## إنشاء الملف server.js
```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world !!');
});


const port = 8000;

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
```

## تغيير سكريبت الدخول في الملف package.json
```
"scripts": {
        "start": "nodemon server.js",
    }
```
هذا السكريبت يسمح بإطلاق الخادم عند كل تغيير في الشفرة البرمجية


## إعداد النماذج
```
const User = mongoose.model("User", {
   .......
})
```
##   (router & controller)إنشاء ملفات التوجيه و التحكم
إعداد دوال التحكم الخاصة بالعمليات CRUD
1. get
1. update
1. put
1. delete 

```
router.get("دليل التوجيه" , الالة)
router.put("دليل التوجيه" , الدالة)
router.update("دليل التوجيه" , الدالة)
router.delete("دليل التوجيه" , الدالة)
```

## إضافة الوسائط إلى server
```
app.use('الرابط', require('التوجيه'))
```