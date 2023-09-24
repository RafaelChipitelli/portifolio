import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSession } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
      asperiores non. Sed laborum eos recusandae blanditiis ab, animi ullam
      incidunt autem architecto quidem? Consequatur optio tempore voluptatibus
      natus cupiditate iure.
    </Paragrafo>
    <GithubSession>
      <img src="https://github-readme-stats.vercel.app/api?username=RafaelChipitelli&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RafaelChipitelli&layout=compact&langs_count=7&theme=dracula" />
    </GithubSession>
  </section>
)

export default Sobre
