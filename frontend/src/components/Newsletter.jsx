import React from "react";

const Newsletter = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now & gain upto 80% discount
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        perferendis, ratione earum dicta porro aliquid? Ipsum asperiores omnis
        quia. Animi accusantium quisquam repudiandae voluptas reiciendis quam
        temporibus nobis corporis exercitationem?
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3" action="">
        <input className="w-full sm:flex-1 outline-none" required type="email" placeholder="Enter your email" />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default Newsletter;
