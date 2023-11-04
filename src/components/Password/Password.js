const Password = () => {
    return(
        <>
        <div className="w-full sm:w-[80%] text-[15px] p-3 flex flex-col justify-start gap-3">
            <h2 className="text-[15px] ">Password</h2>
            <div className="text-[12px] gap-2 flex flex-col">
                <h3>Current password</h3>
                <input type="password" name="current password" className="py-2 px-4 border border-gray-300" />
                <h6 className="text-blue-500">Forget your password?</h6>
            </div>

            <div className="text-[12px] gap-2 flex flex-col">
                <h3>New password</h3>
                <input type="password" name="current password" className="py-2 px-4 border border-gray-300" />
            </div>

            <div className="text-[12px] gap-2 flex flex-col">
                <h3>Verify password</h3>
                <input type="password" name="verify password" className="py-2 px-4 border border-gray-300" />
            </div>
            <button type="submit" className="w-full sm:w-[20%] whitespace-nowrap flex justify-center items-start py-[8px] sm:px-20 bg-blue-500 text-[10px]  sm:text-[15px] text-white border-none rounded-md">Save Changes</button>

</div>
        </>
    )
}
export default Password;