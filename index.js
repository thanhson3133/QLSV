//Khai báo sự kiện khi người dùng click vào nút xác nhận

var validate = new Validation();
var sv = new SinhVien();
var mangSinhVien = []; //mảng chứa nội dung sinh viên được người dùng thêm vào sau khi bấm xác nhận

document.querySelector('#btnXacNhan').onclick = function () {
    //Tạo đối tượng chứa dữ liệu nhập từ người dùng

    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    console.log('sinh viên', sv);

    //----------------Kiểm tra dữ liệu hợp lệ ----------------
    // -------Kiểm tra rổng-----------
    var valid = true;

    valid &= validate.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '#kiemTraRong-maSinhVien')
        & validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '#kiemTraRong-tenSinhVien')
        & validate.kiemTraRong(sv.email, 'Email', '#kiemTraRong-email')
        & validate.kiemTraRong(sv.soDienThoai, 'Số ĐT', '#kiemTraRong-soDienThoai')
        & validate.kiemTraRong(sv.diemToan, 'Điểm toán', '#kiemTraRong-diemToan')
        & validate.kiemTraRong(sv.diemLy, 'Điểm lý', '#kiemTraRong-diemLy')
        & validate.kiemTraRong(sv.diemHoa, 'Điểm hóa', '#kiemTraRong-diemHoa')
        & validate.kiemTraRong(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraRong-diemRenLuyen');

    // Kiểm tra định dạng
    valid &= validate.kiemTraTatKyTu(sv.tenSinhVien, 'Tên sinh viên', '#kiemTraDinhDang-tenSinhVien')
        & validate.kiemTraEmail(sv.email, 'Email', '#kiemTraDinhDang-email')
        & validate.kiemTraTatCaLaSo(sv.soDienThoai, 'Số điện thoại', '#kiemTraDinhDang-soDienThoai')
        & validate.kiemTraTatCaLaSo(sv.diemToan, 'Điểm toán', '#kiemTraDinhDang-diemToan')
        & validate.kiemTraTatCaLaSo(sv.diemLy, 'Điểm lý', '#kiemTraDinhDang-diemLy')
        & validate.kiemTraTatCaLaSo(sv.diemHoa, 'Điểm hóa', '#kiemTraDinhDang-diemHoa')
        & validate.kiemTraTatCaLaSo(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraDinhDang-diemRenLuyen');
    //Kiểm tra độ dài
    valid &= validate.kiemTraDoDai(sv.maSinhVien, 'Mã sinh viên', '#kiemTraDoDai-maSinhVien', 4, 6);
    //Kiểm tra giá trị 
    valid &= validate.kiemTraGiaTri(sv.diemToan, 'Điểm toán', '#kiemTraGiaTri-diemToan', 0, 10) 
    & validate.kiemTraGiaTri(sv.diemLy, 'Điểm lý', '#kiemTraGiaTri-diemLy', 0, 10) 
    & validate.kiemTraGiaTri(sv.diemHoa, 'Điểm hóa', '#kiemTraGiaTri-diemHoa', 0, 10) 
    & validate.kiemTraGiaTri(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraGiaTri-diemRenLuyen', 0, 10);


    if (!valid) {
        return;
    }
    //Mỗi khi người dùng thêm sinh viên vào mảng
    mangSinhVien.push(sv);
    // console.log(mangSinhVien)
    //gọi hàm tạo bảng
    renderTableSinhVien(mangSinhVien);
    //gọi hàm lưu mảng sinh viên vào localstorage
    luuDuLieuLocalStorage();

    // //-----------------------
    // //Tạo ra thẻ tr chứa thông tin sinh viên
    // var trSinhVien = document.createElement('tr');

    // //Tạo ra thẻ td chứa thông tin sinh viên
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;


    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdSoDienThoai = document.createElement('td');
    // tdSoDienThoai.innerHTML = sv.soDienThoai;

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();

    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sv.xepLoai();


    // //td chức năng 
    // var tdChucNang = document.createElement('td');

    // //Tạo button xóa
    // var btnXoaSinhVien = document.createElement('button');
    // btnXoaSinhVien.innerHTML = 'Xóa';
    // btnXoaSinhVien.className = 'btn btn-danger';
    // btnXoaSinhVien.onclick = function () {
    //     //this trong onclick đại diện cho thẻ đó
    //     var theTDCha = btnXoaSinhVien.parentElement;
    //     var trCha = theTDCha.parentElement;
    //     trCha.remove();
    // }

    // tdChucNang.appendChild(btnXoaSinhVien);
    // console.log(btnXoaSinhVien)

    // //Đem thẻ td bỏ vào tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdSoDienThoai);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(tdChucNang);
    // //Dom đến thẻ tbody => tr bỏ vào tbody
    // var tbody = document.querySelector('#tableSinhVien');
    // tbody.appendChild(trSinhVien);
}
var renderTableSinhVien = function (arrSinhVien) {
    var noiDungTable = '';
    for (var i = 0; i < arrSinhVien.length; i++) {
        //mỗi lần duyệt lấy ra 1 đối tượng sinh viên từ mangSinhVien
        var sinhVien = new SinhVien();
        sinhVien.maSinhVien = arrSinhVien[i].maSinhVien;
        sinhVien.tenSinhVien = arrSinhVien[i].tenSinhVien;
        sinhVien.email = arrSinhVien[i].email;
        sinhVien.soDienThoai = arrSinhVien[i].soDienThoai;
        sinhVien.diemToan = arrSinhVien[i].diemToan;
        sinhVien.diemLy = arrSinhVien[i].diemLy;
        sinhVien.diemHoa = arrSinhVien[i].diemHoa;
        sinhVien.diemRenLuyen = arrSinhVien[i].diemRenLuyen;
        sinhVien.loaiSinhVien = arrSinhVien[i].loaiSinhVien;
        noiDungTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.soDienThoai}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.xepLoai()}</td>
                <td>
                    <button class ="btn btn-danger" onclick ="xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button>
                    <button class ="btn btn-primary" onclick="chinhSua('${sinhVien.maSinhVien}')">Sửa</button>
                </td>
            </tr>
        `
    }
    //dom đến thẻ tbody gán innerHTML của tbody = noiDungTable
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
    console.log('noi dung table', noiDungTable)
}
//định nghĩa sự kiện cho nut btn luuThongTin sau khi người dùng thay đổi
document.querySelector('#btnLuuThongTin').onclick = function(){
    //tạo đối tượng lấy thông tin người dùng khi thay đổi
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy =  document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    //tìm ra sinh viên trong mảng có mã trùng với mã người dùng sau khi thay đổi
    for(var i = 0 ; i<mangSinhVien.length; i++){
        var svUpdate = mangSinhVien[i];
        if(svUpdate.maSinhVien == sv.maSinhVien){
            //cập nhật lại từng giá trị thuộc tính của sinh viên trong mảng
            svUpdate.tenSinhVien = sv.tenSinhVien;
            svUpdate.loaiSinhVien = sv.loaiSinhVien;
            svUpdate.email = sv.email;
            svUpdate.soDienThoai = sv.soDienThoai;
            svUpdate.diemToan = sv.diemToan;
            svUpdate.diemLy = sv.diemLy;
            svUpdate.diemHoa = sv.diemHoa;
            svUpdate.diemRenLuyen = sv.diemRenLuyen;
            renderTableSinhVien(mangSinhVien);
            luuDuLieuLocalStorage();
            //Khi lưu thông tin bật nút thêm và ẩn nút lưu
            document.querySelector('#maSinhVien').disabled = false;
            document.querySelector('#btnXacNhan').disabled = false;
            document.querySelector('#btnLuuThongTin').disabled = true;
        }
    }
}
//Định nghĩa hàm khi nút xoá sinh viên được click
var xoaSinhVien = function (maSV) {
    // alert(maSV)
    //duyệt ngược mảng ==> xoá hết các phần tử trùng
    for (var i = mangSinhVien.length - 1; i >= 0; i--) {
        //mỗi lần duyệt lấy ra 1 sinh viên trong mảng
        var sv = mangSinhVien[i];
        //Kiểm tra sinh viên nào trong mảng có maSinhVien == maSV được click thì xoas
        if(sv.maSinhVien === maSV){
            mangSinhVien.splice(i,1); //xoá tại vị trí index tìm được và xoá 1 phần tử
        }
    }
    //gọi hàm tạo lại bảng truyền vào mangSinhVien sau khi xoá
    renderTableSinhVien(mangSinhVien);
    //có thể lưu lại vào localstorage
    luuDuLieuLocalStorage();
}
//Định nghĩa hàm chỉnh sửa sinh viên khi được click
var chinhSua = function(maSV){
    //alert(maSV);
    //khi chỉnh sửu tatwst nút xác nhận và disabled mã sinh viên
    document.querySelector('#maSinhVien').disabled = true;
    document.querySelector('#btnXacNhan').disabled = true;
    document.querySelector('#btnLuuThongTin').disabled = false;
    for(var i =0; i<mangSinhVien.length;i++){
        var sv = mangSinhVien[i];
        if(sv.maSinhVien == maSV){
            //lấy nội dung sinh viên được click gán lên các input phía trên
        document.querySelector('#maSinhVien').value = sv.maSinhVien;
        document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
        document.querySelector('#email').value = sv.email;
        document.querySelector('#soDienThoai').value = sv.soDienThoai;
        document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien;
        document.querySelector('#diemToan').value = sv.diemToan;
        document.querySelector('#diemLy').value = sv.diemLy;
        document.querySelector('#diemHoa').value = sv.diemHoa;
        document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
        }
    }

}
//Lưu dữ liệu 
var luuDuLieuLocalStorage = function () {
    //biến mangSinhVien Thành chuổi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    //Lưu dữ liệu vào localstorage bằng phương thức setItem(key,value)

    localStorage.setItem('mangSinhVien', sMangSinhVien)

}
var layDuLieuLocalStorage = function () {
    //kiem tra localstorage có dữ liệu hay không
    if (localStorage.getItem('mangSinhVien')) {
        //dữ liệu lấy từ localstorage là dạng chuổi
        var ssMangSinhVien = localStorage.getItem('mangSinhVien');
        //biến chuổi dữ liệu thành mảng và gán cho biến mangSinhVien
        mangSinhVien = JSON.parse(ssMangSinhVien);
        //gọi hàm tạo bảng sinh viên từ mangSinhVien được lấy giá trị từ localstorage
        renderTableSinhVien(mangSinhVien);
    }
}
//gọi hàm load data từ storage k browser  load
layDuLieuLocalStorage();

