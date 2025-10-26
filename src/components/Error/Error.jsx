export default function Error()
{
    return (
        <div>
            <div className="flex-col space-y-2 mt-30">
                <div className="flex justify-center">
                    <p className="font-inter font-bold text-[15px] text-hlibi">404!</p>
                </div>
                <div className="flex">
                        <img src="/ops.svg" alt="ops"></img>
                        <p className="font-inter font-normal text-[10px] text-hlibi">Oops… The page you're looking for doesn't exist.</p>
                        <img src="/ops1.svg" alt="ops"></img>
                </div>
            </div>
        </div>
    )
}