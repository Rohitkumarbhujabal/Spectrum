"use client";

import Modal from "./Modal";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
    const { session } = useSessionContext();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
      if (session) {
        router.refresh();
        onClose();
      }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
    }

    return ( 
        <Modal
            title="Welcome back" 
            description="Login to your account." 
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                theme="dark"
                providers={["github", "google"]}
                magicLink
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                      default: {
                        fonts:{
                            bodyFontFamily: 'Menlo',
                            inputFontFamily:'Menlo',
                            labelFontFamily: 'Menlo',
                            buttonFontFamily: 'Menlo'
                        },
                        colors: {
                          brand: '#404040',
                          brandAccent: '#d1700f'
                        }
                      }
                    }
                }}
            />
        </Modal>
     );
}
 
export default AuthModal;