import ContactForm from "@/components/ContactForm/page";

export default function ContactPage() {
  return (
     <> 
      <ContactForm/>
    <div className=" bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
     
       
        <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-6">
          {/* Office 1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Office 1</h2>
            <p className="text-gray-600">123 Demo Street</p>
            <p className="text-gray-600">City A, ST 12345</p>
          </div>
          {/* Office 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Office 2</h2>
            <p className="text-gray-600">456 Sample Avenue, Suite 100</p>
            <p className="text-gray-600">City B, ST 67890</p>
          </div>
          {/* Office 3 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Office 3</h2>
            <p className="text-gray-600">789 Placeholder Road, Suite 200</p>
            <p className="text-gray-600">City C, ST 11111</p>
          </div>
        </div>
      </div>
    </div> 
   </>
  );
}