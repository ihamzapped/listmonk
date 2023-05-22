// import store from '@/store';
import { supabase } from '@/lib/supabase';

export async function authGuard(_to, _from, next) {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (data.session) next();
    else next({ name: 'login' });
  } catch (error) {
    console.log(error);
  }
}

export async function loginRedirect(_to, _from, next) {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (data.session) next({ name: 'services' });
    else next();
  } catch (error) {
    console.log(error);
  }
}
