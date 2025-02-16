import * as React from 'react'
import Header from 'components/pages/landing/header'
import Article from 'components/pages/landing/article/index.mdx'
import MembershipBenefits from 'components/pages/landing/membership-benefits'
import Footer from 'components/pages/landing/footer'

const NewHome = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Article />
        <section className="-mx-5">
          <div className="w-full bg-gradient-to-t dark:from-gray-1000 dark:via-gray-1000 dark:to-gray-900 from-gray-50 via-gray-50 to-white sm:pt-24 sm:pb-24 pt-16 pb-5">
            <h2 className="text-xl leading-tight font-semibold text-center pb-14 mx-auto">
              What you’ll get as an egghead member
            </h2>
            <MembershipBenefits />
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default NewHome
