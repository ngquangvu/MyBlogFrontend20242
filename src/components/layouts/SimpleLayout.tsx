import { Container } from "../molecules/Container"
import { SectionTitle } from "../molecules/SectionTitle"

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <SectionTitle title={title} intro={intro} />
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
