import { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../utils/supabaseClient';
import { Session } from '@supabase/supabase-js';
import Accordion from '../components/accordian';
import NewsLetter from '../components/news-letter';
import Spinner from '../components/spinner';

const sampleNewsLetter = `
Hi [userName],  

We’re thrilled to have you on board! 🎉  

Here’s what’s happening at [Your Business/Platform Name] this month:  

1️⃣ **Exciting Updates:**  
   - We’ve launched [Feature 1] to make your experience even better.  
   - [Feature 2] is now live! Explore the possibilities.  

2️⃣ **Tips & Tricks:**  
   Check out our latest guide: "[Guide Title]" to maximize your productivity.  

3️⃣ **Upcoming Events:**  
   Save the date! Don’t miss our upcoming webinar on [Date & Time].  

📢 **Stay Connected**  
Follow us on [Social Media Link 1] and [Social Media Link 2] to keep up with the latest news.  

Thank you for being an integral part of our community. Feel free to reach out if you have any questions or feedback!  

Warm regards,  
[Your Name/Your Business Team]  

`;

const accordionItems = [
  {
    id: '1',
    title: 'Update Google Trends Newsletter',
    content: sampleNewsLetter
  },
  {
    id: '2',
    title: 'Update Product-Hunt Newsletter',
    content: sampleNewsLetter
  },
  {
    id: '3',
    title: 'Update World-News Newsletter',
    content: sampleNewsLetter
  }
];

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  // const [newsletterContent, setNewsletterContent] = useState(sampleNewsLetter);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUpdatedContent = async () => {};

  const handleLogout = async () => {
    setIsLoading(true)
    await supabase.auth.signOut();
    setIsLoading(false)
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {isLoading && <Spinner />}
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-900">
            Admin Login
          </h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]} // Disable other providers
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white customScrollBar">
        <div className="container mx-auto p-6 customScrollBar">
          {/* Top Navbar */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-100"
            >
              Logout
            </button>
          </div>

          {/* Welcome Message */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold">Welcome, Admin!</h2>
            <p className="mt-2 text-sm text-gray-200">
              Manage your content and settings from here.
            </p>
          </div>

          {/* Fetch Updated Content */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={fetchUpdatedContent}
              className="px-6 py-3 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-100"
            >
              Fetch Updated Content
            </button>
          </div>

          {/* Newsletter Section */}
          <div className='my-5'>
          <NewsLetter 
            heading='Customize and update your onboarding newsletter content.'
            newsletterContent={sampleNewsLetter}
          />
          </div>

          {/* Accordion Section */}
          <h2 className="text-2xl font-semibold">Update Custom Newsletter</h2>
          <Accordion items={accordionItems} />
        </div>
      </div>
    );
  }
};

export default Admin;
