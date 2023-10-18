 // Code javascript: xây dựng trang web động - giao diện, dữ liệu sẽ có thay đổi
        // Xử lý một số logic trên giao diện người dùng

        // Một trong những cách kiểm tra cách code chạy 
        //   console.log("Hello world!")

        // Biến - Khai báo các ô nhớ trên máy tính và lưu trữ dữ liệu
        // Từ khóa khai báo biến + Tên biến = Giá trị biến
        // Từ khóa khai báo: let, var, const

        //   console.log(a)
        //   let a = 5

        
        // Hoisting - Khi khai báo bằng var thì biến sẽ được đưa lên đầu file
        // Nên sử dụng let thay vì var 

        // let c = 10
        // c = 5

        // Tên biến: isDisabled, oddNumber, evenNumber, secondsInMinute
        // Tên biến không được chứa các từ khóa trong javascript như let, var, const
        // Tên biến không được bắt đầu bằng số, không thể chứa dấu cách, -

        // Giá trị biến: Kiểu dữ liệu
        
        // Kiểu string
        let str1 = 'hello world 1'
        let str2 = "hello world 2"
        let str3 = `${str1} - ${str2}`
        let str4 = ""

        // console.log(str3)

        // Kiểu number
        // let num1 = 5

        // Kiểu boolean: đúng/sai 
        let isDog = true
        let isMewMew = false

        // Kiểu undefined
        let test 
        // console.log(test)

        // Kiểu null
        let value = null


        // console.log(typeof str1)
        // console.log(typeof num1)
        // console.log(typeof isDog)
        // console.log(typeof test)
        // console.log(typeof value)

        // Các toán tử sử dụng cho biến: +, -, *, /, %

        // Dấu + đối với string
        const mergeStr = str1 + " - " + str2

        // console.log(mergeStr)

        // Các toán tử đối với number
        // let num1 = 5
        // let num2 = 11
        // let str = "test"
        // let strHaveNumber = "21"


        // console.log(strHaveNumber - num1)
        // console.log("Đây là phép cộng", num2 + num1)
        // console.log("Đây là phép trừ", num2 - num1)
        // console.log("Đây là phép nhân", num2 * num1)
        // console.log("Đây là phép chia", num2 / num1)
        // console.log("Đây là phép chia lấy dư", num2 % num1)

        // let inputNumber1 = +prompt("Hãy nhập số đầu tiên bạn muốn cộng")
        // let inputNumber2 = +prompt("Hãy nhập số thứ hai bạn muốn cộng")

        // console.log("Kết quả sau khi tính tổng", inputNumber1 + inputNumber2)

        // Các toán tử so sánh: ==, ===, >, <, >=, <=    -> kết quả trả về là boolean
        // console.log(5 <= 5)

        // Các toán tử khác: &&, ||, ! -> thường được sử dụng cho kiểu dữ liệu boolean
        let y1 = 7
        let y2= 13
        console.log(y1 + y2)
        console.log(y1 - y2)
        console.log(y1 * y2)
        console.log(y1 / y2)
        console.log(y1 % y2)
       
        // console.log(example1 > 5 && example1 < 10) -> false && true -> false
        // console.log(example1 > 5 || example1 < 10)  -> false || true -> true 
        // console.log(!false)
