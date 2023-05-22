/*
    Context
    CompA => CompB => CompC
    React Context & useContext() hook
    1. create content : tạo dl
        import {createContext} from 'react'
    2. provider : cung cấp dữ liệu
        const context = createContext();
        
    3. consumer : nhận dữ liệu
 */

/*
Local Storage : 
    Khả năng lưu trữ vô thời hạn: Có nghĩa là chỉ bị xóa bằng JavaScript, hoặc xóa bộ nhớ trình duyệt, hoặc xóa bằng localStorage API.
    Lưu trữ được 5MB: Local Storage cho phép bạn lưu trữ thông tin tương đối lớn lên đến 5MB, lưu được lượng thông tin lớn nhất trong 3 loại.
    Không gửi thông tin lên server như Cookie nên bảo mật tốt hơn.
Khởi tạo localStorage
    localStorage.setItem('key', 'value');
    localStorage.key = 'value';
    localStorage['key'] = 'value';
Lấy giá trị localStorage
    localStorage.getItem('key');
    localStorage.key;
Để lấy số lượng localStorage đã có trong trình duyệt:
    localStorage.length();
Để xóa 1 biến trong localStorage, sử dụng removeItem(tên_key)
    localStorage.removeItem(key);
Hoặc xóa tất cả các biến trong localStorage, sử dụng clear
    localStorage.clear();
 */
/*
Session Storage:
    Lưu trên Client: Cũng giống như localStorage thì sessionStorage cũng dùng để lưu trữ dữ liệu trên trình duyệt của khách truy cập (client).
    Mất dữ liệu khi đóng tab: Dữ liệu của sessionStorage sẽ mất khi bạn đóng trình duyệt.
    Dữ liệu không được gửi lên Server.
    Thông tin lưu trữ nhiều hơn cookie (ít nhất 5MB).
 
 */
