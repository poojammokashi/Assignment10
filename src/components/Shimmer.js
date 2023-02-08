const Shimmer = function(){
    return(
        <div className="flex flex-wrap">
           {Array(15).fill(" ").map((e,index)=><div key={index} className="border border-gray-300 shadow rounded-md p-20 m-5  w-[250]">
  <div className="animate-pulse flex object-right ">
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>)} 
        </div>
    )
}


export default Shimmer;