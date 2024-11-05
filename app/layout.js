import '@/app/_styles/globals.css'
import { SidebarProvider } from '@/app/_contexts/SidebarContext'
import LayoutContent from './_components/LayoutContent'

export const metadata = {
    title: {
        template: 'Hout Cutlery | %s',
        default: 'Hout Cutlery | Welcome',
    },
    description:
        'Menyediakan berbagai macam alat makan dengan bahan dasar kayu jati, kayu sonokeling dan kayu sawo. menerima pemesanan hampers dan souvenir.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <SidebarProvider>
                <LayoutContent>{children}</LayoutContent>
            </SidebarProvider>
        </html>
    )
}
