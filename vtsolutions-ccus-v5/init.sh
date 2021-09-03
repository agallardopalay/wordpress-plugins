sh cleanup.sh && \
npm install && \
npm run restart && \
echo "................." && \
echo "compiling done!!!!" && \
echo "use NPM to run:" && \
cat package.json | grep "watch-" && \
echo "................."
