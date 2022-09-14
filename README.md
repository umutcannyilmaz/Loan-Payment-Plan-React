# Loan Payment Plan Project

Bu projede çekilecek kredi tutarını ( dosya masrafı dahil edilmeden ) istenilen faiz oranı ve taksit sayısını, o yılın vergi oranları bsmv ve kkdf oranları girilerek odeme dönemlerini haftalık, aylık veya yıllık olarak ayarlayarak ödeme planını hesaplamaktadır. Taksit hesaplamaları taksitlerin bugünkü değeri üzerinden hesaplanmaktadır. Eşit taksitlerin bugünkü değeri üzerinden hesaplanması gelecekteki değeri üzerinden hesaplanmasıyla aynı sonuçları vermektedir. Fakat gelecek döneme göre hesaplanması bu proje için önce gelecek döneme çevirip daha sonrasında günümüze dönüştürmek gereksiz iş yükü oluşturacağı için tercih edilmemiştir. 

Form yönetimini Formik kütüphanesiyle hallederken, validation yöntemi için Yup Kütüphanesini tercih edilmiştir.

Bu projede 2 adet context yapısı bulunmaktadır. Data Context form verilerimizi topluca alarak verileri ayrıştırıp kaydediyor daha sonrasında Calculation Context'e bu verileri aktarıp orada da bu veriler gerekli işlemler yapılarak ayrı ayrı her taksit döneminin verileri toplanıp bir bütün olarak saklamaktadır. Oluşturulan taksit verileri bir array içinde table.js e aktarılıp map methoduyla tablomuz oluşturulmaktadır.

Tabloyu oluştururken Material UI table component'i kullanılmıştır.

Tabloyu daha yakından incelemek isteyen kullanıcılar için tablo oluştuktan sonra görünürlüğü açılan "tam ekran görüntüle" button'u tıklandığında oluşturduğumuz modal sayfasını çalıştırmakdır. React Portal kullanarak parent component’e ait bir Modal componentini, bulunduğu DOM hiyerarşisinin dışında render ediyoruz. Container.js deki buttona onClick fonksiyonu Modal.js'den use ref, forward ref ve useImpretiveHandle kullanarak istediğimiz fonksiyonu çekerek kullandık.

## How to start

Install all the project dependencies with:
```
npm install
```

And start the development with:
```
npm start
```

