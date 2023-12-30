import { useEffect } from "react";
import { useForm } from "react-hook-form";
import checkAuth from "../../service/checkAuth";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../api/reqs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMinutes } from "../../service/serviceFuncs/addMinutes";
import logo from "../../media/svg/logo.svg"

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

    useEffect(()=>{
        if(checkAuth()){ navigate('/admin_panel') }
    },[navigate])

  function login(data:any){
    loginAdmin({
        identifier:data.email,
        password: data.password
    }).then((res)=>{
        console.log(res);
        
        let currentDate = new Date();
        let newAccessToken = `hope_shop_jwt=${res.data.jwt}; expires=${addMinutes(currentDate, 1440)}` //устанавливаем jwt-токены в куки на сутки
        document.cookie = newAccessToken;
        navigate('/admin_panel')
    }).catch((er)=>{
        toast('Неверные логин или пароль. Проверьте правильность введенных данных', { type:'error', position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",});
    })
  }

  return (
    <div>
        <ToastContainer/>
        <a href="/"><img src={logo} alt="" className="mt-[20px] mx-auto w-[80px] md:w-[110px] hover:cursor-pointer" /></a>

        <form onSubmit={handleSubmit(login)} action="" className="flex flex-col gap-[15px] mx-auto mt-[20vh] max-w-[780px] w-full h-fit px-[20px]">
            <h2 className="text-[25px] lg:text-[35px] font-bold">Вход | Панель администратора</h2>
            <input {...register('email', {required:true})} placeholder="E-mail" className="py-[16px] pl-[20px] border-2 border-solid border-[#2B2B2B]" type="text" />
            {errors.email && <span className="block text-red-500">Поле не может быть пустым</span>}
            <input {...register('password', {required:true})} placeholder="Пароль" className="py-[16px] pl-[20px] border-2 border-solid border-[#2B2B2B]" type="text" />
            {errors.password && <span className="block text-red-500">Поле не может быть пустым</span>}
            
            <button type="submit" className="gbtn w-full mt-[15px] py-[16px] bg-[#303030] text-white">Войти</button>
            
        </form>
    </div>
  )
}
