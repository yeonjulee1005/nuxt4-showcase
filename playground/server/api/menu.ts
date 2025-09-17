import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  const schema = String(getQuery(event).schema)
  const tableName = String(getQuery(event).tableName)

  try {
    const { data, error } = await createClient(supabaseUrl, supabaseKey, { db: { schema } })
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      throw createError({ statusMessage: error.message })
    }

    return data
  }
  catch (error) {
    console.error(error)
  }
})
