"use client";

import { useCurrentUser } from "@/hooks/user-current-user";
import { logout } from "@/actions/logout";
// client component protected route - 01;

const SettingsPage = () => {
  
  const user = useCurrentUser();

  const onClick = () => {
    // server action function logout;
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button
        onClick={onClick}
      >
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;

// server component protected routes;

// import { auth, signOut } from "@/auth";

// const SettingsPage = async ({}) => {
//   const session = await auth();
//   return (
//     <div>
//       {JSON.stringify(session)}      

//       <form action={
//         async () => {
//           "use server";
//           await signOut();
//         }
//       }>
//         <button type="submit">
//           Sign out
//         </button>
//       </form>
      
//     </div>
//   );
// };

// export default SettingsPage;
