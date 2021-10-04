function generateContentObject(html, elementName = 'span') {
    let element = document.createElement(elementName);
    element.insertAdjacentHTML('beforeend', html)
    return element;
}
window.CookieConsent.init({
    modalMainTextMoreLink: null,
    barTimeout: 1000,
    theme: {
        barColor: '#FFF',
        barTextColor: '#00C2A6',
        barMainButtonColor: '#00C2A6',
        barMainButtonTextColor: '#FFF',
        modalMainButtonColor: '#00C2A6',
        modalMainButtonTextColor: '#FFF',
    },
    language: {
        current: 'pt-BR',
        current: 'pt-BR',
        locale: {
            'pt-BR': {
                barMainText: 'Este site usa cookies que são úteis para que você tenha a melhor experiência de uso desse site.',
                barLinkSetting: 'Gerenciar cookies',
                barBtnAcceptAll: 'Aceitar e continuar',
                modalMainTitle: 'Configuração dos Cookies',
                modalMainText: generateContentObject(`Os cookies são pequenos arquivos, criados pelo seu navegador, com seus dados de navegação em nossas páginas. Eles são necessários para identificar características e informações sobre o usuário, além de ser importante para o bom funcionamento da página em seu computador.
                                                        <br><br>Alguns desses cookies são responsáveis por enviar, a servidores nossos e externos, as informações de sua atividade de navegação dentro de nossas páginas, salvando, por exemplo, suas preferências de configurações.
                                                        Você pode escolher e gerenciar a escolha desses cookies.<br><br>
                                                        <b> Recomendamos permitir todos os cookies para o pleno funcionamento de nossas páginas.</b> `),
                modalBtnSave: 'Salvar alterações',
                modalBtnAcceptAll: 'Aceitar todos',
                modalAffectedSolutions: generateContentObject('Ao desmarcar essa opção, você afetará diretamente <b><u>opções essenciais</b></u>, como:'),
                learnMore: 'Ver mais',
                on: 'Ativar',
                off: 'Desativar',
            }
        }
    },
    categories: {
        necessary: {
            needed: true,
            wanted: true,
            checked: true,
            language: {
                locale: {
                    'pt-BR': {
                        name: 'Cookies Extremamente Necessários',
                        description: 'Cookies necessários são obrigatórios por serem essenciais ao funcionamento do site. Sem eles, as páginas não são apresentadas adequadamente e não funcionarão adequadamente.',
                    }
                }
            }
        },
        various: {
            needed: false,
            wanted: false,
            checked: false,
            language: {
                locale: {
                    'pt-BR': {
                        name: 'Outros Cookies funcionais ',
                        description: generateContentObject(`Cookies funcionais ou de estatísticas ajudam o site ou serviços de terceiros à salvar aquilo que você prefere em sua navegação (como preferências de login ou funcionalidades). 
                                                            <br>
                                                            <br>
                                                            Junto a isso, contamos também com informações, utilizadas para personalizar anúncios e publicações que são exibidas para você. 
                                                            <br>
                                                            <br>
                                                            Os cookies analíticos auxiliam na análise de estatísticas de desempenho de nosso site, auxiliando na melhoria da experiência de navegação, por exemplo. `),
                    }
                }
            }
        }
    },
    services: {
        localcookie: {
            category: 'various',
            type: 'localcookie',
            search: 'localcookie',
            language: {
                locale: {
                    'pt-BR': {
                        name: 'Cookies locais;'
                    }
                }
            }
        },
        analytics: {
            category: 'various',
            type: 'dynamic-script',
            search: 'analytics',
            cookies: [
                {
                    name: '_gid',
                    domain: `.${window.location.hostname}`
                },
                {
                    name: /^_ga/,
                    domain: `.${window.location.hostname}`
                }
            ],
            language: {
                locale: {
                    'pt-BR': {
                        name: 'Google Analytics'
                    }
                }
            }
        },
        dinamize: {
            category: 'various',
            type: 'dynamic-script',
            search: 'dinamize',
            cookies: [
                {
                    name: /^din/,
                    domain: `.${window.location.hostname}`
                }
            ],
            language: {
                locale: {
                    'pt-BR': {
                        name: 'Dinamize'
                    }
                }
            }
        },
        facebook: {
            category: 'various',
            type: 'dynamic-script',
            search: 'facebook',
            language: {
                locale: {
                    'pt-BR': {
                        name: 'Facebook'
                    }
                }
            }
        },
        adsense: {
            category: "various",
            type: "dynamic-script",
            search: "adsense",
            cookies: [
                {
                    name: "_gcl_au",
                    domain: `.${window.location.hostname}`
                }
            ],
            language: {
                locale: {
                    'pt-BR': {
                        name: "Google Adsense"
                    }
                }
            }
        },
        linkedin: {
            category: "various",
            type: "dynamic-script",
            search: "linkedin",
            language: {
                locale: {
                    'pt-BR': {
                        name: "Linkedin"
                    }
                }
            }
        },
    }
});