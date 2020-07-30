package lk.ac.eceylon.service.impl;

import lk.ac.eceylon.entity.Search;
import lk.ac.eceylon.repository.SearchRepository;
import lk.ac.eceylon.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly =  true)

public class SearchServiceImpl implements SearchService {

    @Autowired
    private SearchRepository searchRepository;

    @Override
    public boolean saveSearchResults(Search search) {
        Search result=searchRepository.save(search);
        if(result!=null)
            return true;
        else
            return false;
    }
}
