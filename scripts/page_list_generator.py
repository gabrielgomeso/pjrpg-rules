import os
import json

def get_all_files(directory, base_url):
    pages = []
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith('.md'):
                relative_path = os.path.relpath(os.path.join(root, filename), directory)
                page_url = base_url + relative_path.replace('.md', '/').replace('\\', '/')
                pages.append(page_url)
    return pages

directory = 'docs/01-criacao-de-personagens/01-powers'
base_url = '/01-criacao-de-personagens/01-powers/'

pages = get_all_files(directory, base_url)

with open('docs/pages.json', 'w') as f:
    json.dump(pages, f)