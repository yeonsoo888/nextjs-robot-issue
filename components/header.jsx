import Link from 'next/link';

function Header() {
  return (
    <header>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/page1"><a>page1</a></Link></li>
            <li><Link href="/page2"><a>page2</a></Link></li>
            <li><Link href="/page3"><a>page3</a></Link></li>
        </ul>
    </header>
  )
}

export default Header