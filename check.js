import java.util.HashSet;
import java.util.Set;

public class StringProblem{
        public static void main (String[] args){
            String mystring = "abaababbabcbabsbbababababb";
            process(mystring);
        }
        
        public static void process (String input) {
            Set store = new HashSet();
            String result = "";
            for (int index = input.length()-1; index >= 0; index--) {
                Character ch = input.charAt(index);
                if (!store.contains(ch)) {
                    store.add(ch);
                    result = result + ch;
                }
            }
            System.out.println(result);
        }
        
}