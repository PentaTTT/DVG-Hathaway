import tiktokLogo from '../assets/partner/tiktok.png'
import tiktokHoverLogo from '../assets/partner/tiktok-hover.png'
import {
    target, targetHover, facebook, facebookHover, ads, adsHover, google, googleHover,
    fanpage, fanpageHover, media, mediaHover,
} from '../assets/service/index'
import { chiennguyen, emma2, emma4, emma5, midha, ngiu99, taconghieu, thanhthy } from '../assets/kol/index'
import { chao4, chao2, chao5 } from '../assets/kol/index'
import { ruby, ruby4, ruby5 } from '../assets/kol/index'
import { lybiettuot, lybiettuot2, lybiettuot3 } from '../assets/kol/index'
import { thaotran, thaotran2, thaotran3 } from '../assets/kol/index'

export const serviceNetFanPage = [
    {
        id: 1,
        name: "Việt Nam News",
        follow: "1,100,000",
        link: "https://www.facebook.com/fanpagevietnamnews",
        cost: "5,000,000",
        img: "https://i.pinimg.com/originals/ab/54/d9/ab54d92349eeee4b2287e3369366d4c6.jpg"
    },
    {
        id: 2,
        name: "Quảng Ninh",
        follow: "373,000",
        link: "https://www.facebook.com/quangninhfanpage.official",
        cost: "3,000,000",
        img: "https://i.pinimg.com/originals/2e/97/fd/2e97fd242eb8c2d4bffd0426ef084106.jpg"
    },
    {
        id: 3,
        name: "Hải Phòng",
        follow: "861,000",
        link: "https://www.facebook.com/Page.HaiPhong",
        cost: "4,000,000",
        img: "https://i.pinimg.com/originals/db/12/5f/db125f2e4b7d7f026dc68297bcd850f8.jpg",
    },
    {
        id: 4,
        name: "Lớp Người Ta",
        follow: "1,900,000",
        link: "https://www.facebook.com/lopnguoita.fp",
        cost: "6,000,000",
        img: "https://i.pinimg.com/originals/63/db/38/63db38b1d2edafc9fa58a2f078cde9bd.jpg",
    },
    {
        id: 5,
        name: "Khẩu Nghiệp",
        follow: "945,000",
        link: "https://www.facebook.com/khaunghiepfp",
        cost: "6,000,000",
        img: "https://i.pinimg.com/originals/a5/aa/b3/a5aab369ce3e1573169ffe673f7e62c2.png",
    },
    {
        id: 6,
        name: "Người Hải Phòng",
        follow: '220,000',
        link: "https://www.facebook.com/fanpage.nguoihaiphong",
        cost: "2,000,000",
        img: "https://i.pinimg.com/originals/f1/53/7b/f1537bd5679fd234762ce920f2f5048e.jpg",
    },
    {
        id: 7,
        name: "Nhịp sống Hải Phòng Group",
        follow: "169,000",
        link: "https://www.facebook.com/groups/Nhipsong.HaiPhong",
        cost: "2,000,000",
        img: "https://i.pinimg.com/originals/c3/4b/f7/c34bf7498a2d6467bb0f350fc7b96786.jpg",
    },
    {
        id: 8,
        name: "Hội Người Hải Phòng Group",
        follow: "297,000",
        link: "https://www.facebook.com/groups/Page.HaiPhong",
        cost: "2,000,000",
        img: "https://i.pinimg.com/originals/d4/f2/c4/d4f2c46346651e147894f3b72cfb3b57.jpg",
    },
    {
        id: 9,
        name: "Lớp Người Ta Group",
        follow: "872,000",
        link: "https://www.facebook.com/groups/330142177560573",
        cost: "6,000,000",
        img: "https://i.pinimg.com/originals/08/e8/25/08e8258d68527686253fb766b2942fe3.png",
    },
]

//net fanpage
export const serviceNetFanPageExtra = {
    columns: ["STT", "Tên Fanpage", "Link", "Follow", "Chi Phí Post"],
    data: [
        ["1", "Sài Gòn Có Gì ?", "https://www.facebook.com/SGCG24H", "521k", "2.500.000"],
        ['2', 'Đà Nẵng Trong Tôi', 'https://www.facebook.com/DNTT247', '68k', '1.200.000'],
        ['3', 'Tuổi Trẻ Vĩnh Long', 'https://www.facebook.com/tuoitrevinhlong64/', '143k', '1.500.000'],
        ['4', 'Dân An Giang', 'https://www.facebook.com/AnGiang1080/', '313k', '1.600.000'],
        ['5', 'Sóc Trăng Tôi Yêu', 'https://www.facebook.com/profile.php?id=100078680843642', '187k', '1.500.000'],
        ['6', 'Cần Thơ Tôi Yêu', 'https://www.facebook.com/CanTho2504', '207k', '1.500.000'],
        ['7', 'Kiên Giang', 'https://www.facebook.com/Ki%C3%AAn-Giang-297059584487654/', '213k', '1.500.000'],
        ['8', 'Bến Tre', 'https://www.facebook.com/BenTre2504/', '154k', '1.500.000'],
        ['9', 'Thanh Hóa 36', 'https://www.facebook.com/ThanhHoa2504/', '206k', '1.500.000'],
        ['10', 'Trà Vinh Tôi Yêu', 'https://www.facebook.com/Tr%C3%A0-Vinh-T%C3%B4i-Y%C3%AAu-279238109678924/', '146k', '1.500.000'],
        ['11', 'Dân Quảng Ngãi', 'https://www.facebook.com/DanQuangNgai247', '117k', '1.500.000'],
        ['12', 'Long An Tôi Yêu', 'https://www.facebook.com/Long-An-T%C3%B4i-Y%C3%AAu-959882260886497/', '132k', '1.500.000'],
        ['13', 'Dân Đồng Nai', 'https://www.facebook.com/DongNai1080/', '230k', '1.500.000'],
        ['14', 'Dân Tiền Giang', 'https://www.facebook.com/TienGiang2504/', '206k', '1.200.000'],
        ['15', 'Người Bình Sơn', 'https://www.facebook.com/QuangNgaiTV247', '60k', '1.200.000'],
        ['16', 'Lang Thang Bắc Ninh', 'https://www.facebook.com/BacNinh1080', '	77k', '1.400.000'],
        ['17', 'Hậu Giang', 'https://www.facebook.com/H%E1%BA%ADu-Giang-360444368073638/', '154k', '1.500.000'],
        ['18', 'Tuổi Trẻ Bình Định', 'https://www.facebook.com/BinhDinh2504/', '101k', '1.500.000'],
        ['19', 'Người Gia Lai', 'https://www.facebook.com/GiaLai1080/', '136k', '1.500.000'],
        ['20', 'Tuổi Trẻ Bình Dương', 'https://www.facebook.com/Binhduong2504/', '121k', '1.500.000'],
        ['21', 'Thừa Thiên Huế', 'https://www.facebook.com/ThuaThienHue1080', '190k', '1.500.000'],
        ['22', 'Quê mẹ Quảng Bình', 'https://www.facebook.com/QMQB.VN', '119k', '1.500.000'],
        ['23', 'Vũng Tàu', 'https://www.facebook.com/V%C5%A9ng-T%C3%A0u-2386043441469720', '126k', '1.500.000'],
        ['24', 'Chuyện Của Đắk Lắk', 'https://www.facebook.com/DakLak2504', '115k', '1.500.000'],
        ['25', 'Quảng Ngãi Có Gì', 'https://www.facebook.com/QuangNgaiCoZi', '98k', '1.500.000'],
        ['26', 'Bình Thuận Có Gì', 'https://www.facebook.com/BinhThuanCoZi/', '92k', '1.500.000'],
        ['27', 'Cà Mau Có Gì', 'https://www.facebook.com/C%C3%A0-Mau-C%C3%B3-G%C3%AC--103571328269664/', '78k', '1.500.000'],
        ['28', 'Tôi Là Người Đồng Tháp', 'https://www.facebook.com/DongThap1080/', '144k', '1.500.000'],
        ['29', 'Chuyện Của Biên Hòa', 'https://www.facebook.com/ChuyencuaBienQua', '135k', '1.200.000'],
        ['30', 'Gia lai in my heart', 'https://www.facebook.com/profile.php?id=100067784917444', '21k', '1.000.000'],
        ['31', 'Hà Tĩnh Có Gì', 'https://www.facebook.com/H%C3%A0-T%C4%A9nh-C%C3%B3-G%C3%AC--104523045000853/', '37k', '1.000.000'],
        ['32', 'Quảng Nam Xịn', 'https://www.facebook.com/Qu%E1%BA%A3ng-Nam-X%E1%BB%8Bn-100584145403270', '28k', '1.000.000'],
        ['33', 'Hòa Bình Có Gì ?', 'https://www.facebook.com/H%C3%B2a-B%C3%ACnh-C%C3%B3-G%C3%AC--103302329370433', '13k', '1.000.000'],
        ['34', 'Sơn La Có Gì ?', 'https://www.facebook.com/S%C6%A1n-La-C%C3%B3-G%C3%AC--100726226298722', '22k', '1.000.000'],
        ['35', 'Lào Cai Có Gì ?', 'https://www.facebook.com/L%C3%A0o-Cai-C%C3%B3-G%C3%AC--104948679203127', '11k', '1.000.000'],
        ['36', 'Yên Bái Có Gì ?', 'https://www.facebook.com/Y%C3%AAn-B%C3%A1i-C%C3%B3-G%C3%AC--115557941463196/', '18k', '1.000.000'],
        ['37', 'Phú Thọ Có Gì ?', 'https://www.facebook.com/Ph%C3%BA-Th%E1%BB%8D-C%C3%B3-G%C3%AC--105212659176098', '20k', '1.000.000'],
        ['38', 'Hà Giang Có Gì ?', 'https://www.facebook.com/H%C3%A0-Giang-C%C3%B3-G%C3%AC--114198411599874', '12k', '1.000.000'],
        ['39', 'Tuyên Quang Tôi Yêu ?', 'https://www.facebook.com/Tuy%C3%AAn-Quang-T%C3%B4i-y%C3%AAu--107037962326560', '17k', '1.000.000'],
        ['40', 'Thái Nguyên Có Gì ?', 'https://www.facebook.com/Th%C3%A1i-Nguy%C3%AAn-C%C3%B3-G%C3%AC--104959025869607', '24k', '1.000.000'],
        ['41', 'Lạng Sơn Tôi Yêu', 'https://www.facebook.com/L%E1%BA%A1ng-S%C6%A1n-T%C3%B4i-Y%C3%AAu-105945912222913', '7,2k', '1.000.000'],
        ['42', 'Bắc Giang Có Gì ?', 'https://www.facebook.com/B%E1%BA%AFc-Giang-C%C3%B3-G%C3%AC--111243465233521', '18k', '1.000.000'],
        ['43', 'Quảng Ninh Có Gì ?', 'https://www.facebook.com/Qu%E1%BA%A3ng-Ninh-C%C3%B3-G%C3%AC--100334843006408', '12k', '1.000.000'],
        ['44', 'Hà Nam Có Gì ?', 'https://www.facebook.com/H%C3%A0-Nam-C%C3%B3-G%C3%AC--108301202201365', '8,1k', '1.000.000'],
        ['45', 'Hưng Yên Có Gì ?', 'https://www.facebook.com/H%C6%B0ng-Y%C3%AAn-C%C3%B3-G%C3%AC--108286002221278', '10k', '1.000.000'],
        ['46', 'Hải Dương Tôi Yêu ?', 'https://www.facebook.com/H%E1%BA%A3i-D%C6%B0%C6%A1ng-T%C3%B4i-Y%C3%AAu-104056452634344', '8,6k', '1.000.000'],
        ['47', 'Hải Phòng Có Gì ?', 'https://www.facebook.com/H%E1%BA%A3i-Ph%C3%B2ng-C%C3%B3-G%C3%AC--116627304693293', '25k', '1.000.000'],
        ['48', 'Nam Định Có Gì ?', 'https://www.facebook.com/Nam-%C4%90%E1%BB%8Bnh-C%C3%B3-G%C3%AC--105649498928149', '10k', '1.000.000'],
        ['49', 'Thái Bình Có Gì ?', 'https://www.facebook.com/Th%C3%A1i-B%C3%ACnh-C%C3%B3-G%C3%AC--108236031999036', '23k', '1.000.000'],
        ['50', 'Vĩnh Phúc Có Gì ?', 'https://www.facebook.com/V%C4%A9nh-Ph%C3%BAc-C%C3%B3-G%C3%AC--110537035098629', '9,1k', '1.000.000'],
        ['51', 'Phú Yên Có Gì ?', 'https://www.facebook.com/profile.php?id=100085772541578', '11k', '1.000.000'],
        ['52', 'Khánh Hòa Có Gì ?', 'https://www.facebook.com/profile.php?id=100085093983566', '10k', '1.000.000'],
        ['53', 'Ninh Thuận Có Gì ?', 'https://www.facebook.com/Ninh-Thu%E1%BA%ADn-C%C3%B3-G%C3%AC--103833129121570', '11k', '1.000.000'],
        ['54', 'Bình Thuận Tôi Yêu', 'https://www.facebook.com/B%C3%ACnh-Thu%E1%BA%ADn-C%C3%B3-G%C3%AC--103920345779429', '11k', '1.000.000'],
        ['55', 'Kon Tum Có Gì ?', 'https://www.facebook.com/profile.php?id=100085050130353', '10k', '1.000.000'],
        ['56', 'Gia Lai Có Gì ?', 'https://www.facebook.com/profile.php?id=100084785701450', '14k', '1.000.000'],
        ['57', 'Đắk Lắk Tôi Yêu', 'https://www.facebook.com/%C4%90%E1%BA%AFk-L%E1%BA%AFk-T%C3%B4i-Y%C3%AAu-100873872950932', '15k', '1.000.000'],
        ['58', 'Đắk Nông Có Gì ?', 'https://www.facebook.com/profile.php?id=100085101818211', '8,7k', '1.000.000'],
        ['59', 'Lâm Đồng Có Gì ?', 'https://www.facebook.com/profile.php?id=100084771532076', '14k', '1.000.000'],
        ['60', 'Bình Dương Tôi Yêu', 'https://www.facebook.com/profile.php?id=100077554545130', '24k', '1.000.000'],
        ['61', 'Bình Phước Có Gì ?', 'https://www.facebook.com/B%C3%ACnh-Ph%C6%B0%E1%BB%9Bc-C%C3%B3-G%C3%AC--101404672685695', '15k', '1.000.000'],
        ['62', 'Đồng Nai Có Gì ?', 'https://www.facebook.com/DongNaiCoGi247', '66k', '1.000.000'],
        ['63', 'Tây Ninh Có Gì ?', 'https://www.facebook.com/profile.php?id=100084591125659', '14k', '1.000.000'],
        ['64', 'An Giang Tôi Yêu', 'https://www.facebook.com/AnGiangToiYeu247/', '8,1k', '1.000.000'],
        ['65', 'Bạc Liêu Có Gì ?', 'https://www.facebook.com/profile.php?id=100084483130446', '19k', '1.000.000'],
        ['66', 'Cà Mau Tôi Yêu', 'https://www.facebook.com/C%C3%A0-Mau-T%C3%B4i-Y%C3%AAu-101080439385275', '18k', '1.000.000'],
        ['67', 'Đồng Tháp Có Gì ?', 'https://www.facebook.com/%C4%90%E1%BB%93ng-Th%C3%A1p-C%C3%B3-G%C3%AC--108707428610000', '15k', '1.000.000'],
        ['68', 'Thanh Hóa Có Gì ?', 'https://www.facebook.com/profile.php?id=100090643604672', '15k', '1.000.000'],
        ['69', 'Nghệ An Có Gì ?', 'https://www.facebook.com/profile.php?id=100084339687382', '16k', '1.000.000'],
        ['70', 'Hà Tĩnh Có Gì ?', 'https://www.facebook.com/profile.php?id=100084349977769', '1,9k', '1.000.000'],
        ['71', 'Quảng Bình Có Gì ?', 'https://www.facebook.com/profile.php?id=100090578087586', '7,6k', '1.000.000'],
        ['72', 'Quảng Nam Có Gì ?', 'https://www.facebook.com/profile.php?id=100084554418059', '11k', '1.000.000'],
        ['73', 'Quảng Ngãi Tôi Yêu', 'https://www.facebook.com/profile.php?id=100090991441372', '5,3k', '1.000.000'],
        ['74', 'Bình Định Có Gì ?', 'https://www.facebook.com/profile.php?id=100090840218060', '4,4k', '1.000.000'],
        ['75', 'Bà Rịa Vũng Tàu Có Gì ?', 'https://www.facebook.com/profile.php?id=100090506963109', '7,5k', '1.000.000'],
        ['76', 'An Giang Có Gì ?', 'https://www.facebook.com/profile.php?id=100090753970035', '17k', '1.000.000'],
        ['77', 'Cần Thơ Đâyy', 'https://www.facebook.com/LangThangCanTho247/', '18k', '1.000.000'],
        ['78', 'Hậu Giang Có Gì ?', 'https://www.facebook.com/profile.php?id=100084734945860', '7,5k', '1.000.000'],
        ['79', 'Kiên Giang Có Gì ?', 'https://www.facebook.com/profile.php?id=100090909362753', '7,5k', '1.000.000'],
        ['80', 'Long An Có Gì ?', 'https://www.facebook.com/profile.php?id=100084387079511', '13k', '1.000.000'],
        ['90', 'DÂN TÂY NINH', 'https://www.facebook.com/DanTayninh2019', '180K', '2.300.000'],
        ['91', 'HI ĐẮK NÔNG', 'https://www.facebook.com/hidaknong', '69K', '1.500.000'],
        ['92', 'VĨNH PHÚC CHILL', 'https://www.facebook.com/vinhphucchill/', '32K', '1.500.000'],
        ['93', 'VĨNH PHÚC 24H', 'https://www.facebook.com/VinhPhuc24h.vn/', '119K', '1.500.000'],
        ['94', 'Kon Tum +', 'https://www.facebook.com/kontumplus', '104K', '1.500.000'],
        ['95', 'Nhà Tôi Đắk LẮk', 'https://www.facebook.com/nhatoidaklak/', '151K', '1.500.000'],
        ['96', 'Người Sóc Trăng', 'https://www.facebook.com/Nh%C3%A0-T%C3%B4i-S%C3%B3c-Tr%C4%83ng-115227063542860/', '120K', '1.500.000'],
        ['97', 'Nhà Tôi Lạng Sơn', 'https://www.facebook.com/nhatoilangson/', '96k', '1.500.000'],
        ['98', 'Nhà Tôi Hải Phòng', 'https://www.facebook.com/nhatoihaiphong/', '103K', '1.500.000'],
        ['99', 'Nhà Tôi Đắk Nông', 'https://www.facebook.com/Nhatoidacnong/', '79K', '1.500.000'],
        ['100', 'Kiên Giang 68', 'https://www.facebook.com/kiengiangg', '111K', '1.500.000'],
        ['101', 'Nhà Tôi An Giang', 'https://www.facebook.com/NhatoiAnGiang/', '160K', '1.500.000'],
        ['102', 'Quê Tôi Quảng Trị', 'https://www.facebook.com/QueToiQuangTri123/', '60K', '1.500.000'],
        ['103', 'Nhà Tôi Nghệ An', 'https://www.facebook.com/nhatoinghean/', '194K', '1.500.000'],
        ['104', 'Nhà Tôi Bắc Giang', 'https://www.facebook.com/nhatoibacgiang.fanpage/', '121K', '1.500.000'],
        ['105', 'Nhà Tôi Khánh Hòa', 'https://www.facebook.com/nhatoikhanhhoa/', '101K', '1.500.000'],
        ['106', 'Nhà Tôi Thanh Hóa', 'https://www.facebook.com/NhatoiThanhHoa/', '112K', '1.500.000'],
        ['107', 'Nhà Tôi Thừa Thiên Huế', 'https://www.facebook.com/Nhatoithuathienhue/', '149K', '1.500.000'],
        ['108', 'Gia Lai Trong Tôi', 'https://www.facebook.com/NhaToiGiaLai.Fanpage', '98K', '1.300.000'],
        ['109', 'Chuyện Của Bắc Ninh', 'https://www.facebook.com/NhaToiBacNinh/', '49K', '1.400.000'],
        ['110', 'Nhà Tôi Quảng Bình', 'https://www.facebook.com/nhatoiquangbinh/', '66K', '1.400.000'],
        ['111', 'Nhà Tôi Sơn La', 'https://www.facebook.com/nhatoisonla/', '135K', '1.500.000'],
        ['112', 'Nhà Tôi Hải Dương', 'https://www.facebook.com/nhatoihaiduong.fanpage/', '99K', '1.500.000'],
        ['113', 'Nhà Tôi Hà Nam', 'https://www.facebook.com/nhatoihanam/', '54K', '1.500.000'],
        ['114', 'Nhà Tôi Ninh Bình', 'https://www.facebook.com/nhatoininhbinh/', '49K', '1.500.000'],
        ['115', 'Nhà Tôi Yên Bái', 'https://www.facebook.com/nhatoiyenbai/', '127K', '1.500.000'],
        ['116', 'Nhà Tôi Lào Cai', 'https://www.facebook.com/nhatoilaocai/', '71K', '1.500.000'],
        ['117', 'Nhà Tôi Phú Thọ', 'https://www.facebook.com/nhatoiphutho/', '91K', '1.500.000'],
        ['118', 'Nhà Tôi Hà Giang', 'https://www.facebook.com/nhatoihagiang', '72K', '1.500.000'],
        ['119', 'Nhà Tôi Tiền Giang', 'https://www.facebook.com/Nh%C3%A0-T%C3%B4i-Ti%E1%BB%81n-Giang-101293568284116/', '72K', '1.500.000'],
        ['120', 'Nhà Tôi Tuyên Quang', 'https://www.facebook.com/nhatoituyenquang/', '66K', '1.500.000'],
        ['121', 'Nhà Tôi Vĩnh Long', 'https://www.facebook.com/nhatoivinhlong/', '134K', '1.500.000'],
        ['122', 'Nhà Tôi Vĩnh Phúc', 'https://www.facebook.com/nhatoivinhphuc.fanpage/', '72K', '1.500.000'],
        ['123', 'Dân Bình Phước', 'https://www.facebook.com/BinhPhuoc93.Fanpage', '112K', '1.500.000'],
        ['124', 'Thái Nguyên Trong Tôi', 'https://www.facebook.com/nhatoithainguyen.fanpage/', '68K', '1.500.000'],
        ['125', 'Nhà Tôi Hòa Bình', 'https://www.facebook.com/nhatoihoabinh', '77K', '1.300.000'],
        ['126', 'Người Bình Thuận', 'https://www.facebook.com/binhthuan86.fanpage', '72K', '1.300.000'],
        ['127', 'Người Nghệ An', 'https://www.facebook.com/nghean37.fanpage', '114K', '1.300.000'],
        ['128', 'Người Quảng Ngãi', 'https://www.facebook.com/NhatoiQuangNgai', '27K', '1.300.000'],
        ['129', 'Người Đồng Tháp', 'https://www.facebook.com/dongthap.fanpage', '113K', '1.200.000'],
        ['130', 'Người Quảng Nam', 'https://www.facebook.com/quangnam92.fanpage', '84K', '1.500.000'],
        ['131', 'Long An 62', 'https://www.facebook.com/LongAn62.fanpage', '84K', '1.500.000'],
        ['132', 'Dân Cần Thơ', 'https://www.facebook.com/dancantho.page', '136K', '1.500.000'],
        ['133', 'Nhà Tôi Hà Giang', 'https://www.facebook.com/nhatoihagiang', '72K', '1.500.000'],
        ['134', 'Người An Giang', 'https://www.facebook.com/angiang67.fanpage', '155K', '1.500.000'],
        ['135', 'Người Ninh Bình', 'https://www.facebook.com/ninhbinh.fanpage', '64K', '1.500.000'],
        ['136', 'Lang Thang Sài Gòn', 'https://www.facebook.com/langthangsaigonnow', '98K', '1.500.000'],
        ['137', 'Nhà Tôi Lai Châu', 'https://www.facebook.com/nhatoilaichau', '22K', '1.500.000'],
        ['138', 'Lang Thang Nam Định', 'https://www.facebook.com/nhatoinamdinh', '12K', '1.500.000'],
        ['139', 'Người Hải Dương', 'https://www.facebook.com/haiduong34.fanpage', '33K', '1.500.000'],
        ['140', 'Người Phú Thọ', 'https://www.facebook.com/phutho19.fanpage', '33K', '1.500.000'],
        ['141', 'Quảng Trị Của Tôi', 'https://www.facebook.com/Qu%E1%BA%A3ng-Tr%E1%BB%8B-C%E1%BB%A7a-T%C3%B4i-858174401247738', '32K', '1.500.000'],
        ['142', 'Người Thanh Hóa', 'https://www.facebook.com/T%C3%B4i-Y%C3%AAu-Thanh-H%C3%B3a-142944824579924', '31K', '1.500.000'],
        ['143', 'Bắc Ninh Của Tôi', 'https://www.facebook.com/bnct.page?mibextid=LQQJ4d', '61K', '1.500.000'],
        ['144', 'Lang Thang Đồng Nai', 'https://www.facebook.com/langthangdongnai60', '115K', '1.500.000'],
        ['145', 'Beat Hà Nội', 'https://www.facebook.com/beattvv.co', '113K', '1.500.000'],
        ['146', 'Người Ninh Thuận', 'https://www.facebook.com/ninhthuan.fanpage', '31K', '1.500.000'],
        ['147', 'Nhà Tôi Ninh Thuận', 'https://www.facebook.com/nhatoininhthuan', '57K', '1.500.000'],
    ]
}

//booking kol
export const serviceBooking = [
    {
        id: 1,
        name: "Emma Nhất Khánh",
        desc: "Post video tiktok và post ảnh fanpage",
        img: [
            emma2, emma4, emma5
        ]
    },
    {
        id: 2,
        name: "Chao (whynotchao)",
        desc: "Post video tiktok và post ảnh fanpage",
        img: [
            chao4, chao2, chao5
        ]
    },
    {
        id: 3,
        name: "Ruby Bảo An",
        desc: "Post video tiktok và post ảnh fanpage",
        img: [
            ruby, ruby4, ruby5
        ]
    },
    {
        id: 4,
        name: "Ly Biết Tuốt",
        desc: "",
        img: [
            lybiettuot, lybiettuot2, lybiettuot3
        ]
    },
    {
        id: 5,
        name: "Thảo Trần",
        desc: "",
        img: [
            thaotran, thaotran2, thaotran3
        ]
    },
    {
        id: 6,
        name: "Khác",
        desc: "",
        img: [
            thanhthy, ngiu99, midha
        ]
    },
    {
        id: 7,
        name: "Khác 2",
        desc: "",
        img: [
            taconghieu, chiennguyen,
        ]
    },
]

export const serviceList = [
    {
        id: 1,
        img: fanpage,
        imgHover: fanpageHover,
        title: 'Quản trị Fanpage',
        sub: [
            'Quản lý Fanpage', 'Content', 'Facebook Ads'
        ],
        serviceDetail: {
            columns: ["Hạng Mục", "Nội Dung", "Gói Cơ Bản (7tr VNĐ)", "Gói Tiêu Chuẩn (10tr VNĐ)", "Gói Nâng Cao (15tr VNĐ)"],
            data: [
                [
                    "Chiến lược & kế hoạch",
                    "Nghiên cứu về mô hình kinh doanh",
                    "false",
                    "true",
                    "true"
                ],
                [
                    "Chiến lược & kế hoạch",
                    "Nghiên cứu về sản phẩm và thương hiệu",
                    "false",
                    "true",
                    "true"
                ],
                [
                    "Chiến lược & kế hoạch",
                    "Nghiên cứu chuẩn SEO social content",
                    "false",
                    "true",
                    "true"
                ],
                [
                    "Chiến lược & kế hoạch",
                    "Chiến lược và xây dựng nội dung theo tháng",
                    "false",
                    "false",
                    "true"
                ],
                [
                    "Triển khai",
                    "Xây dựng nội dung bài viết",
                    "30 bài",
                    "60 bài",
                    "120 bài"
                ],
                [
                    "Triển khai",
                    "Chèn logo địa chỉ cho hình ảnh, sản phẩm",
                    "true",
                    "true",
                    "true"
                ],
                ["Triển khai", "Thiết kế Banner/Avatar cho fanpage", "false", "true", "true"],
                ["Triển khai", "Sản xuất video ( bao gồm content, quay, dựng )", "false", "false", "2"],
                ["Triển khai", "Booking fanpage/group phù hợp", "1", "2", "2"],
                ["Triển khai", "Giám sát và báo cáo tiến độ theo tuần", "true", "true", "true"],
                ["Triển khai", "Cam kết tiếp cận tối thiểu", "30000 lượt", "60000 lượt", "120000 lượt"],

                ["Tối ưu fanpage", "Thiết kế chatbox, kịch bản nhắn tin chuyên nghiệp", "false", "true", "true"],
                ["Tối ưu fanpage", "Tối ưu slogan kênh/ Cập nhật thông tin đầy đủ", "true", "true", "true"],
                ["Khuyến mãi", "Tặng bài booking social", "false", "false", "1"],

            ]
        },
    },
    {
        id: 2,
        img: facebook,
        imgHover: facebookHover,
        title: 'Network Fanpage',
        sub: [
            'Booking Hot Page', 'Đăng Ảnh & Video', 'Post Bài'
        ]
    },
    {
        id: 3,
        img: target,
        imgHover: targetHover,
        title: 'Booking',
        sub: [
            'Booking KOL', 'Booking KOC', 'Truyền Thông Số Tích Hợp'
        ]
    },
    {
        id: 4,
        img: tiktokLogo,
        imgHover: tiktokHoverLogo,
        title: 'Xây Kênh Tiktok',
        sub: [
            'Tư Vấn Xây Kênh Tiktok', 'Sản Xuất Content', 'Quản Lý Kênh'
        ],
        serviceDetail: {
            columns: ["Nội Dung", "Gói Cơ Bản", "Gói Tiêu Chuẩn", "Gói Nâng Cao", "Gói Viral"],
            data: [
                ["Tạo kênh và đặt tên kênh", "true", "true", "true", "true"],
                ["Nghiên cứu và phân tích khách hàng", "true", "true", "true", "true"],
                ["Xây dựng kịch bản", "true", "true", "true", "true"],
                ["Cập nhật hồ sơ kênh", "true", "true", "true", "true"],
                ["Tối ưu hastag bài đăng", "true", "true", "true", "true"],
                ["Xử lí sự cố, cmt tiêu cực", "true", "true", "true", "true"],
                ["Thời gian triển khai", "2 tháng", "3 tháng", "3 tháng", "3 tháng"],
                ["Chất lượng video", "Full HD", "Full HD", "Full HD", "Full HD",],
                ["Ekip triển khai", "true", "true", "true", "true"],
                ["Số buổi quay", "6", "10", "12", "12"],
                ["Số lượng video", "20", "30", "35", "50"],
                ["Thời lượng video", "30-60s", "30-60s", "30-1p30s", "30-1p30s"],
                ["Bối cảnh", "1", "1", "2", "2"],
                ["Dựng hậu kỳ", "true", "true", "true", "true"],
                ["Lượng follower kênh", "10k followers", "30k followers", "50k followers", "100k followers"],
                ["Số views tối thiểu đạt được", "300k views", "500k views", "110k views", "3M views"],
            ]
        }
    },
    {
        id: 5,
        img: ads,
        imgHover: adsHover,
        title: 'Website',
        sub: [
            'Tư Vấn & Xây Dựng Website', 'SEO Website', 'Mua Tên Miền'
        ],
        serviceDetail: {
            columns: ["Dịch Vụ", "Mô Tả", "Báo Giá"],
            data: [
                ["Tư vấn & lấy yêu cầu", "Tư vấn & lấy yêu cầu về loại, giao diện, nội dung và chức năng của website", ""],
                ["Hoạch định chiến lược", "Định hướng mục tiêu, định vị thương hiệu, thị trường, phân tích người dùng..", ""],
                ["Viết nội dung", "Hoàn thiện những nội dung như giới thiệu công ty, dịch vụ", ""],
                ["Xây dựng, Lập trình website", "Xây dựng website theo giao diện, chức năng đã chốt (hình ảnh, video do khách cung cấp). Tối ưu độ tương thích với PC, Mobile, Tablet", ""],
                ["Mua tên miền và hosting", "Hỗ trợ mua tên miền và hosting để triển khai chạy trên các trình duyệt (mất phí gia hạn từ năm thứ 2 với hosting và tháng thứ 2 với tên miền)", ""],
                ["Dịch vụ hỗ trợ", "Chuyển giao hướng dẫn quản trị website, Cập nhật các hình ảnh nội dung, backup dữ liệu", ""],
                ["Dịch vụ SEO website", "Hoạch định các nội dung chiến lượt tối ưu SEO cho website, Quảng bá cũng như xây dựng tính liên kết", ""]
            ]
        }
    },
    {
        id: 6,
        img: media,
        imgHover: mediaHover,
        title: 'Thiết Kế',
        sub: [
            'Thiết Kế Logo', 'Thiết Kế Banner', 'Thiết Kế Các Ấn Phẩm In Ấn'
        ],
        serviceDetail: {
            columns: ["Dịch Vụ", "Mô Tả", "Thời Gian Hoàn Thành", "Báo Giá"],
            data: [
                ["Thiết kế banner website/ facebook", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "3 ngày", "Từ 600.000đ trở lên"],
                ["Thiết kế logo", "Thiết kế dựa trên ý tưởng có sẵn của khách hàng", "1-7 ngày", "Từ 2.000.000đ trở lên"],
                ["Thiết kế bài đăng facebook (LẺ 1 ẢNH)", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "3 ngày", "Từ 600.000đ/ảnh trở lên"],
                ["Thiết kế bài đăng facebook (COMBO 10 ẢNH)", "Số lần chỉnh sửa: 2", "1-3 ngày", "Từ 4.000.000đ trở lên"],
                ["Thiết kế powerpoint thuyết trình - Chỉ thiết kế", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "1-3 ngày", "Từ 300.000đ/trang trở lên"],
                ["Thiết kế Standee, phướn, băng rôn", "Số lần chỉnh sửa: 2", "3 ngày", "500.000đ"],
                ["Thiết kế backdrop sự kiện (hội nghị, sinh nhật, event,...)", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "3 ngày", "Từ 600.000đ/ảnh trở lên"],
                ["Thiết kế tờ rơi (flyer), tờ gấp (leaflet) - Chỉ thiết kế", "Nội dung khách hàng cung cấp", "3-5 ngày", "Từ 500.000đ/trang trở lên"],
                ["Thiết kế tờ rơi (flyer), tờ gấp (leaflet) - Bao gồm soạn nội dung", "Nội dung khách hàng cung cấp", "3-5 ngày", "Từ 800.000đ/trang trở lên"],
                ["Thiết kế phong bì thư, Thiết kế thiệp mời", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "3-5 ngày", "Từ 400.000đ trở lên"],
                ["Thiết kế menu, thực đơn", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "7-10 ngày", "Từ 400.000đ/trang trở lên"],
                ["Thiết kế hồ sơ năng lực - Chỉ thiết kế", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế - Khách hàng cung cấp file word/excel nội dung và hình ảnh", "20 ngày", "Từ 500.000đ/trang"],
                ["Thiết kế hồ sơ năng lực - Bao gồm soạn nội dung", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế - Khách hàng cung cấp file word/excel nội dung và hình ảnh", "15-25 ngày", "Từ 700.000đ/trang"],
                ["Thiết kế thẻ đeo, thẻ VIP, thẻ bảo hành, card visit…", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "3-5 ngày", "Từ 400.000đ trở lên"],
                ["Thiết kế hình in trên áo", "Chi phí tùy thuộc vào độ cầu kỳ của thiết kế", "5-7 ngày", "Từ 800.000đ trở lên"],
            ]
        }
    },
]