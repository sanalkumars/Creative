'use server';

import { z } from 'zod';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { FormSchema } from '../types';
import { cookies } from 'next/headers';

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await (supabase.auth as any).signInWithPassword({
    email,
    password,
  });
  return response;
}
// export async function actionLogin({
//     email,password
// }:z.infer<typeof FormSchema>) {
//     const supabase = createRouteHandlerClient({cookies});
//     const response = await supabase.auth.
// }

